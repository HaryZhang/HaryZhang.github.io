Array.prototype.indexOf = function (item) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == item) return i;
    }
    return -1;
};

Array.prototype.delete = function (item) {
    var i = this.indexOf(item);
    i > -1 && this.splice(i, 1);
};

// 获取角度
function getAngle(point, point2) {
    var X = point2.x - point.x;
    var Y = point2.y - point.y;
    var angle = Math.acos(Y / Math.sqrt(X * X + Y * Y));
    if (X >= 0 && Y >= 0) {
        angle = 2 * Math.PI - angle;
    } else {
        if (X >= 0 && Y <= 0) {
            angle = 2 * Math.PI - angle;
        }
    }
    return angle;
}

// 绘制元素周边虚线
function drawDashLine(lineCon, x1, y1, x2, y2, offset) {
    offset = undefined === offset ? 5 : offset;
    var bevelLen = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    var num = Math.floor(bevelLen / offset);
    for (var i = 0; i < num; i++) {
        var X = x1 + (x2 - x1) / num * i;
        var Y = y1 + (y2 - y1) / num * i;
        if (i % 2 == 0) {
            lineCon['moveTo'](X, Y);
        } else {
            lineCon['lineTo'](X, Y);
        }
    }
}

!function ($) {
    var PATH = "images/";
    var winHeight = window.innerHeight, winWidth = 750;
    var Container = PIXI.Container;
    var mainContainer = new Container;
    mainContainer.width = winWidth;
    mainContainer.height = winHeight;


    //添加TV显示
    var tvContainer = new Container;
    tvContainer.width = 180;
    tvContainer.height = 180;
    tvContainer.position.set(200, 150);

    var selectedContainer = new Container;
    var roomContainer = new Container;
    var flagContainer = new Container;
    var shareContainer = new Container;
    var secondContainer = new Container;
    var thirdContainer = new Container;
    var unselectedContainer = new Container;

    var PeoplesArr = [];

    var CanvasRenderer = new PIXI.CanvasRenderer(winWidth, winHeight, {backgroundColor: 16777215});

    var roomsImg = [
        PATH + "rooms/room1.png",
        PATH + "rooms/room2.png",
        PATH + "rooms/room3.png"
    ];

    var tvImg = [
        PATH + "surprised.png",
        PATH + "surprised2.png",
        PATH + "slide.png"];

    var othersImg = [
        PATH + "others/1.png",
        PATH + "others/2.png",
        PATH + "others/3.png",
        PATH + "others/4.png",
        PATH + "others/5.png",
        PATH + "others/6.png",
        PATH + "others/7.png",
        PATH + "others/8.png",
        PATH + "others/9.png",
        PATH + "others/10.png",
        PATH + "others/11.png",
        PATH + "others/12.png",
        PATH + "others/13.png",
        PATH + "others/14.png",
        PATH + "others/15.png",
        PATH + "others/16.png"
    ];

    var flagsImg = [
        PATH + "flags/flag1.png",
        PATH + "flags/flag2.png",
        PATH + "flags/flag3.png",
        PATH + "flags/flag4.png",
        PATH + "flags/flag5.png",
        PATH + "flags/flag6.png",
        PATH + "flags/flag7.png",
        PATH + "flags/flag8.png",
        PATH + "flags/flag9.png",
        PATH + "flags/flag10.png"
    ];

    // 数据从data.js导入
    var manClothsAll = [manCloths, manLeftCloths, manRightCloths, manBackCloths];
    var manFaceAll = [manFace, manLeftFace, manRightFace, manBackFace];
    var manHairAll = [manHair, manLeftHair, manRightHair, manBackHair];
    var womanClothsAll = [womanCloths, womanLeftCloths, womanRightCloths, womanBackCloths];
    var womanFaceAll = [womanFace, womanLeftFace, womanRightFace, womanBackFace];
    var womanHairAll = [womanHair, womanLeftHair, womanRightHair, womanBackHair];

    $("#main_container").append(CanvasRenderer.view);

    $(".welcome_layer, .guide").bind("touchmove", function (event) {
        event.preventDefault();
    });

    PIXI.loader.add([
        PATH + "rotate.png",
        PATH + "close.png",
        roomsImg[0],
        flagsImg[0],
        tvImg[0],
        tvImg[1],
        tvImg[2],
        PATH + "bottom_slogan.png",
        PATH + "man_left/body.png",
        PATH + "man_right/body.png",
        PATH + "woman_left/body.png",
        PATH + "woman_right/body.png"
    ]).load(initLoaded);

    function initLoaded() {
        winWidth = window.innerWidth;
        $(".world_cup_layer, .main_layer").width(750).height(winHeight);
        mainContainer.width = winWidth;
        mainContainer.interactive = true;
        mainContainer.on("touchend", function () {
            for (var i = 0; i < selectedContainer.children.length; i++) {
                var activeItem = selectedContainer.children[i];
                new TWEEN.Tween(activeItem.scale).to({x: 1, y: 1}, 100).start();
                if (0 === activeItem.sex || 1 === activeItem.sex) {
                    for (var n = 0; n < activeItem.children.length; n++) {
                        var item = activeItem.children[n];
                        if (item.children[0] && "bone1" == item.children[0].name) {
                            item.children[0].children[1].dragging = false;
                        } else {
                            n == activeItem.children.length - 1 ? item.children[1].dragging = false : item.dragging = false
                        }
                    }
                } else {
                    for (var n = 0; n < activeItem.children.length; n++) {
                        activeItem.children[0].dragging = false;
                        activeItem.children[1].children[1].dragging = false;
                    }
                }
            }
        });

        // init room flag
        initRoomAndFlag();

        var bottomCon = new PIXI.Graphics;
        bottomCon.beginFill(16777215);
        bottomCon.drawRect(0, winHeight - 156, 750, 150);
        bottomCon.endFill();
        shareContainer.position.set(0, 0);

        var whiteBg = new PIXI.Graphics;
        whiteBg.beginFill(16777215);
        whiteBg.drawRect(0, 0, 2000, 2000);
        whiteBg.endFill();

        var erweima = PIXI.Sprite.fromImage([PATH + "erweima.png"]);

        erweima.width = 108, erweima.height = 108, erweima.position.set(618, winHeight - 132);

        var bottom_slogan = new PIXI.Sprite(PIXI.loader.resources[PATH + "bottom_slogan.png"].texture);
        bottom_slogan.position.set(20, winHeight - 140);

        shareContainer.visible = false;

        shareContainer.addChild(bottomCon, bottom_slogan, erweima);

        var mask = new PIXI.Graphics;
        mask.beginFill(10053375);
        mask.drawRect(0, 0, 750, 1448);
        mask.endFill();
        thirdContainer.mask = mask;
        thirdContainer.addChild(mask, whiteBg, roomContainer, flagContainer, tvContainer, unselectedContainer, selectedContainer);
        secondContainer.addChild(thirdContainer, shareContainer);
        mainContainer.addChild(secondContainer);
        CanvasRenderer.render(mainContainer);
        render();
    }

    function initRoomAndFlag() {

        //初始化TV player
        var tvimg1 = new PIXI.Sprite(PIXI.loader.resources[tvImg[0]].texture);
        tvimg1.visible = false;

        var tvimg2 = new PIXI.Sprite(PIXI.loader.resources[tvImg[1]].texture);
        tvimg2.visible = false;
        tvimg2.x=80;
        tvimg2.y=50;

        var slideimg = new PIXI.Sprite(PIXI.loader.resources[tvImg[2]].texture);
        slideimg.visible = false;
        slideimg.y=30;
        tvContainer.addChild(slideimg);
        tvContainer.addChild(tvimg1);
        tvContainer.addChild(tvimg2);

        var room = new PIXI.Sprite(PIXI.loader.resources[roomsImg[0]].texture);
        var flag = new PIXI.Sprite(PIXI.loader.resources[flagsImg[0]].texture);

        flagContainer.position.set(630, 40);
        roomContainer.index = 0;
        flagContainer.index = 0;

        roomContainer.addChild(room);
        flagContainer.addChild(flag);


        roomContainer.interactive = true;
        roomContainer.buttonMode = true;

        flagContainer.interactive = true;
        flagContainer.buttonMode = true;

        roomContainer.on("tap", function () {
            if (selectedContainer.children.length) {
                for (var i = 0; i < selectedContainer.children.length; i++) {
                    var curr = selectedContainer.children[i];
                    curr.chosen = false;
                    curr.outline.visible = false;
                    unselectedContainer.addChild(curr);
                    selectedContainer.removeChild(curr);
                }
            }
        });

        flagContainer.on("tap", function () {
            if (selectedContainer.children.length) {
                for (var i = 0; i < selectedContainer.children.length; i++) {
                    var curr = selectedContainer.children[i];
                    curr.chosen = false;
                    curr.outline.visible = false;
                    unselectedContainer.addChild(curr);
                    selectedContainer.removeChild(curr);
                }
            }
        });
    }

    // 实时渲染
    function render() {
        TWEEN.update();
        requestAnimationFrame(render);
        CanvasRenderer.render(mainContainer);
    }

    //生成哭脸
    function showCryFace() {
        $("#float-cry").fadeIn();
        setTimeout(function () {
            $("#float-cry").fadeOut();

        },1000);
    }



    //实时变换
    var tween,imgInterval;
    function changeTVShow() {
        if(tween)
        {
            tween.stop();
            tween=null;
        }
        if(imgInterval!=null)
        {
            clearInterval(imgInterval);
            imgInterval=null;
        }
        var slideImg = tvContainer.getChildAt(0);
        slideImg.visible = true;
        var x = slideImg.x;
        var y = slideImg.y;
        var flag = true;
        imgInterval = setInterval(function () {
            if (flag) {
                tvContainer.getChildAt(1).visible = true;
                tvContainer.getChildAt(2).visible = false;
            }
            else {
                tvContainer.getChildAt(1).visible = false;
                tvContainer.getChildAt(2).visible = true;
            }
            flag = !flag;
        }, 200);
        tween = new TWEEN.Tween({px: x, py: y})
            .to({px: x + 250, py: y}, 1500)
            .onStart(function () {
               // isAnimation=true;
            })
            .onUpdate(function () {
                slideImg.x = this.px;
                slideImg.y = this.py;
            })
            .onStop(function () {
                slideImg.x = x;
                slideImg.y = y;
                slideImg.visible = false;
                //  isAnimation=false;
                clearInterval(imgInterval);
                tvContainer.getChildAt(1).visible = false;
                tvContainer.getChildAt(2).visible = false;
            })
            .onComplete(function () {
                slideImg.x = x;
                slideImg.y = y;
                slideImg.visible = false;
              //  isAnimation=false;
                clearInterval(imgInterval);
                tvContainer.getChildAt(1).visible = false;
                tvContainer.getChildAt(2).visible = false;
            }).start();
    }


    // var newPeople = createNewPeople(0);
    // selectedContainer.addChild(newPeople);
    function createNewPeople(index) {
        var singlePeople = new Container;
        PeoplesArr.push(singlePeople);
        singlePeople.chosen = true;
        singlePeople.interactive = true;
        singlePeople.buttonMode = true;
        singlePeople.on("touchstart", function () {
            new TWEEN.Tween(this.scale).to({x: 1.015, y: 1.015}, 100).start();
            if (!this.chosen) {
                this.chosen = true;
                this.outline.visible = true;
                if (selectedContainer.children.length) {
                    var n = selectedContainer.children[0];
                    n.chosen = false;
                    n.outline.visible = false;
                    unselectedContainer.addChild(n);
                    selectedContainer.removeChildren();
                }
                PeoplesArr.delete(this);
                PeoplesArr.push(this);
                changeMenuStatus(this.sex, singlePeople);
                selectedContainer.addChild(this);
                unselectedContainer.removeChild(this);
            }
        }).on("touchend", function () {
            new TWEEN.Tween(this.scale).to({x: 1, y: 1}, 100).start();
        });
        var curdata;
         index == 0 ? curdata = z[0] : curdata = Z[0];
        // index == 0 ? curdata = z[1] : curdata = Z[1];  // 默认生成左边的人物
        // index == 0 ? curdata = z[2] : curdata = Z[2];  // 默认生成右边的人物
        //index == 0 ? curdata = z[3] : curdata = Z[3];  // 默认生成背面的人物
        singlePeople.data = JSON.parse(JSON.stringify(curdata));
        var randomx = 50 * Math.random() - 50,
            randomy = 50 * Math.random() - 50;

        singlePeople.globalPosition = {
        	x: singlePeople.data.globalPosition.x + randomx,
        	y: singlePeople.data.globalPosition.y + randomy
        };

        // singlePeople.globalPosition = {
        //     x: 240,
        //     y: 60
        // };


        singlePeople.sex = index;
        singlePeople.facingTo = 0; // 正面的人物
        //singlePeople.facingTo = 1; // 左边的人物
        // singlePeople.facingTo = 2; // 右边的人物
        //singlePeople.facingTo = 3; // 背面的人物
        singlePeople.faceIndex = 0;
        singlePeople.hairIndex = 0;
        singlePeople.clothIndex = 0;
        // man
        if (index == 0) {
            createBones(singlePeople, {
                face: manFaceAll[singlePeople.facingTo][singlePeople.faceIndex],
                hair: manHairAll[singlePeople.facingTo][singlePeople.hairIndex]
            });
            reDrawPeople(singlePeople, manClothsAll[0][0]);
            // reDrawPeople(singlePeople, manClothsAll[1][0]);  // 衣服左侧的
            // reDrawPeople(singlePeople, manClothsAll[2][0]);  // 衣服右侧的
            // reDrawPeople(singlePeople, manClothsAll[3][0]);  // 衣服背面的
            setTimeout(function () {
                initRotate(singlePeople);
            }, 100);
        } else { // woman
            createBones(singlePeople, {
                face: womanFaceAll[singlePeople.facingTo][singlePeople.faceIndex],
                hair: womanHairAll[singlePeople.facingTo][singlePeople.hairIndex]
            });
            reDrawPeople(singlePeople, womanClothsAll[0][0]);
            setTimeout(function () {
                initRotate(singlePeople);
            }, 100);
        }
        changeMenuBySex(index, singlePeople);
        return singlePeople;
    }

    function changeMenuBySex(sex, currPerson) {
        if (sex == 0) {  // 男性
            $(".man_cloth").show()
            $(".woman_cloth").hide()
            $(".man_facingTo").show()
            $(".woman_facingTo").hide()
            $(".man_hair").show()
            $(".woman_hair").hide()
            $(".man_face").show()
            $(".woman_face").hide()
            $(".man_cloth li").removeClass("active")
            $(".man_cloth li").eq(currPerson.clothIndex).addClass("active")
            $(".man_facingTo li").removeClass("active")
            $(".man_facingTo li").eq(currPerson.facingTo).addClass("active")
            $(".man_face li").removeClass("active")
            $(".man_face li").eq(currPerson.faceIndex).addClass("active")
            $(".man_hair li").removeClass("active")
            $(".man_hair li").eq(currPerson.hairIndex).addClass("active")
            itemAnimate(currPerson);
            currPerson.currentSelectIndex = 1;
        } else if (sex == 1) {  // 女性
            $(".man_cloth").hide()
            $(".woman_cloth").show()
            $(".man_facingTo").hide()
            $(".woman_facingTo").show()
            $(".man_hair").hide()
            $(".woman_hair").show()
            $(".woman_face").show()
            $(".man_face").hide()
            $(".woman_cloth li").removeClass("active")
            $(".woman_cloth li").eq(currPerson.clothIndex).addClass("active")
            $(".woman_facingTo li").removeClass("active")
            $(".woman_facingTo li").eq(currPerson.facingTo).addClass("active")
            $(".woman_face li").removeClass("active")
            $(".woman_face li").eq(currPerson.faceIndex).addClass("active")
            $(".woman_hair li").removeClass("active")
            $(".woman_hair li").eq(currPerson.hairIndex).addClass("active")
            itemAnimate(currPerson);
            currPerson.currentSelectIndex = 1;
        }
    }

    function changeMenuStatus(sex, currPerson) {
        if (sex == 0) {
            $(".man_cloth").show()
            $(".woman_cloth").hide()
            $(".man_facingTo").show()
            $(".woman_facingTo").hide()
            $(".woman_face").hide()
            $(".man_face").show()
            $(".man_hair").show()
            $(".woman_hair").hide()
            $(".man_cloth li").removeClass("active")
            $(".man_cloth li").eq(currPerson.clothIndex).addClass("active")
            $(".man_facingTo li").removeClass("active")
            $(".man_facingTo li").eq(currPerson.facingTo).addClass("active")
            $(".man_face li").removeClass("active")
            $(".man_face li").eq(currPerson.faceIndex).addClass("active")
            $(".man_hair li").removeClass("active")
            $(".man_hair li").eq(currPerson.hairIndex).addClass("active")
            itemAnimate(currPerson)
            $(".selected").removeClass("selected")
            $(".category_item").hide()
            $(".category_item").eq(currPerson.currentSelectIndex).show()
            $(".scroll_bar ul li").eq(currPerson.currentSelectIndex).addClass("selected")
        } else if (sex == 1) {
            $(".man_cloth").hide()
            $(".woman_cloth").show()
            $(".man_facingTo").hide()
            $(".woman_facingTo").show()
            $(".man_hair").hide()
            $(".woman_hair").show()
            $(".man_face").hide()
            $(".woman_face").show()
            $(".woman_cloth li").removeClass("active")
            $(".woman_cloth li").eq(currPerson.clothIndex).addClass("active")
            $(".woman_facingTo li").removeClass("active")
            $(".woman_facingTo li").eq(currPerson.facingTo).addClass("active")
            $(".woman_face li").removeClass("active")
            $(".woman_face li").eq(currPerson.faceIndex).addClass("active")
            $(".woman_hair li").removeClass("active")
            $(".woman_hair li").eq(currPerson.hairIndex).addClass("active")
            itemAnimate(currPerson)
            $(".selected").removeClass("selected")
            $(".category_item").hide()
            $(".category_item").eq(currPerson.currentSelectIndex).show()
            $(".scroll_bar ul li").eq(currPerson.currentSelectIndex).addClass("selected")
        } else if (sex == -100) {
            $(".man_cloth").hide()
            $(".woman_cloth").hide()
            $(".man_facingTo").hide()
            $(".woman_facingTo").hide()
            $(".man_hair").hide()
            $(".woman_hair").hide()
            $(".man_face").hide()
            $(".woman_face").hide()
            $(".category_guide").show()
        }
    }


    function changeFacingTo(currPerson, index) {
        if (currPerson.facingTo == index) {
            return
        }
        currPerson.facingTo = index;
        if (currPerson.sex == 0) {
            currPerson.removeChildren();
            currPerson.data = JSON.parse(JSON.stringify(z[index]));
            createBones(currPerson, {
                face: manFaceAll[index][currPerson.faceIndex],
                hair: manHairAll[index][currPerson.hairIndex]
            });
            reDrawPeople(currPerson, manClothsAll[index][currPerson.clothIndex]);
            setTimeout(function () {
                initRotate(currPerson);
            }, 100);
        } else if (1 == currPerson.sex) {
            currPerson.removeChildren();
            currPerson.data = JSON.parse(JSON.stringify(Z[index]));
            createBones(currPerson, {
                face: womanFaceAll[index][currPerson.faceIndex],
                hair: womanHairAll[index][currPerson.hairIndex]
            });
            reDrawPeople(currPerson, womanClothsAll[index][currPerson.clothIndex]);
            setTimeout(function () {
                initRotate(currPerson);
            }, 100);
        }
    }


    function itemAnimate(currPerson) {
        if (currPerson) {
            currPerson.clothIndex && currPerson.clothIndex > 2 ? $(".cloth").animate({
                scrollLeft: 130 * (currPerson.clothIndex - 2) + "px"
            }, 300) : $(".cloth").animate({
                scrollLeft: "0px"
            }, 300);

            currPerson.facingTo && currPerson.facingTo > 2 ? $(".facingTo").animate({
                scrollLeft: 130 * (currPerson.facingTo - 2) + "px"
            }, 300) : $(".facingTo").animate({
                scrollLeft: "0px"
            }, 300);

            currPerson.faceIndex && currPerson.faceIndex > 2 ? $(".face").animate({
                scrollLeft: 130 * (currPerson.faceIndex - 2) + "px"
            }, 300) : $(".face").animate({
                scrollLeft: "0px"
            }, 300);

            currPerson.hairIndex && currPerson.hairIndex > 2 ? $(".hair").animate({
                scrollLeft: 130 * (currPerson.hairIndex - 2) + "px"
            }, 300) : $(".hair").animate({
                scrollLeft: "0px"
            }, 300)
        }
    }

    function changeFace(currPerson, curIndex) {
        if (currPerson.face && currPerson.faceIndex != curIndex && currPerson.facingTo != 3) {
            currPerson.faceIndex = curIndex
            if (0 == currPerson.sex) {
                currPerson.head.removeChildAt(1);
                var n = PIXI.Sprite.fromImage(manFaceAll[currPerson.facingTo][curIndex].url);
                n.position.set(manFaceAll[currPerson.facingTo][curIndex].position.x, manFaceAll[currPerson.facingTo][curIndex].position.y);
                currPerson.head.addChildAt(n, 1);
                currPerson.face = n;
            }
            if (1 == currPerson.sex) {
                currPerson.head.removeChildAt(1);
                var n = PIXI.Sprite.fromImage(womanFaceAll[currPerson.facingTo][curIndex].url);
                n.position.set(womanFaceAll[currPerson.facingTo][curIndex].position.x, womanFaceAll[currPerson.facingTo][curIndex].position.y);
                currPerson.head.addChildAt(n, 1);
                currPerson.face = n;
            }
        }
    }

    function changeHair(currPerson, curIndex) {
        if (currPerson.hairIndex != curIndex) {
            currPerson.hairIndex = curIndex;
            var n = currPerson.hair.visible;
            if (0 == currPerson.sex) {
                currPerson.head.removeChildAt(currPerson.head.children.length - 1);
                var i = PIXI.Sprite.fromImage(manHairAll[currPerson.facingTo][curIndex].url);
                i.position.set(manHairAll[currPerson.facingTo][curIndex].position.x, manHairAll[currPerson.facingTo][curIndex].position.y);
                currPerson.head.addChild(i);
                currPerson.hair = i;
            }
            if (1 == currPerson.sex) {
                currPerson.head.removeChildAt(currPerson.head.children.length - 1);
                var i = PIXI.Sprite.fromImage(womanHairAll[currPerson.facingTo][curIndex].url);
                i.position.set(womanHairAll[currPerson.facingTo][curIndex].position.x, womanHairAll[currPerson.facingTo][curIndex].position.y);
                currPerson.head.addChild(i);
                currPerson.hair = i;
            }
            currPerson.hair.visible = n;
        }
    }

    function changeRooms(index) {
        if (roomContainer.index != index) {
            roomContainer.removeChildren();
            roomContainer.index = index;
            var room = PIXI.Sprite.fromImage([roomsImg[index]]);
            roomContainer.addChild(room)
        }
    }


    function changeFlag(index) {
        changeTVShow();
        showCryFace();
        if (flagContainer.index != index) {
            flagContainer.removeChildren();
            flagContainer.index = index;
            var flag = PIXI.Sprite.fromImage([flagsImg[index]]);
            flagContainer.addChild(flag);
        }
    }

    function addOthers(i) {
        if (selectedContainer.children.length) {
            var cur = selectedContainer.children[0];
            cur.chosen = false;
            cur.outline.visible = false;
            unselectedContainer.addChild(cur);
            selectedContainer.removeChildren();
        }
        var cont = new Container;
        cont.chosen = true;
        cont.interactive = true;
        cont.buttonMode = true;
        cont.on("touchstart", function () {
            new TWEEN.Tween(this.scale).to({x: 1.015, y: 1.015}, 100).start();
            if (!this.chosen) {
                this.chosen = true;
                this.outline.visible = true;
                if (selectedContainer.children.length) {
                    var curr = selectedContainer.children[0];
                    curr.chosen = false;
                    curr.outline.visible = false;
                    unselectedContainer.addChild(curr);
                    selectedContainer.removeChildren();
                }
                selectedContainer.addChild(this);
                unselectedContainer.removeChild(this);
            }
        });
        cont.data = {};
        var x = 50 * Math.random() - 50;
        var y = 50 * Math.random() - 50;
        cont.globalPosition = {
            x: 200 + x,
            y: 500 + y
        };
        cont.position.set(cont.globalPosition.x, cont.globalPosition.y);
        var spr = PIXI.Sprite.fromImage(othersImg[i]);
        spr.interactive = true;
        spr.buttonMode = true;
        var line = new Container;
        cont.addChild(spr, line);
        cont.outline = line;
        spr.texture.baseTexture.hasLoaded ? initOthersImg(cont) : spr.texture.baseTexture.on("loaded", function () {
            initOthersImg(cont)
        });
        selectedContainer.addChild(cont);
    }

    //  othersCon 表示当前otherContainer容器
    function initOthersImg(othersCon) {
        othersCon.outline.removeChildren();
        var line = new PIXI.Graphics;
        line.lineStyle(1, 16777215, 1);
        var width = othersCon.width, height = othersCon.height;
        othersCon.pivot.set(width / 2, height / 2);
        othersCon.position.set(othersCon.globalPosition.x + width / 2, othersCon.globalPosition.y + height / 2);
        var offset = 20;
        line.moveTo(-offset, -offset);
        drawDashLine(line, -offset, -offset, width + offset, -offset);
        drawDashLine(line, width + offset, -offset, width + offset, height + offset);
        drawDashLine(line, width + offset, height + offset, -offset, height + offset);
        drawDashLine(line, -offset, height + offset, -offset, -offset);
        othersCon.outline.addChild(line);

        // othersCon.children[0] 具体的这个otherImg
        othersCon.children[0].on("touchstart", function (e) {
            this.dragging = true;
            this.startPosition = {
                x: e.data.global.x,
                y: e.data.global.y
            }
        }).on("touchmove", function (e) {
            if (this.dragging) {
                this.newPosition = {
                    x: e.data.global.x,
                    y: e.data.global.y
                };
                var parentX = this.newPosition.x - this.startPosition.x + this.parent.globalPosition.x + this.parent.pivot._x;
                var parentY = this.newPosition.y - this.startPosition.y + this.parent.globalPosition.y + this.parent.pivot._y;
                this.parent.position.set(parentX, parentY);
            }
        }).on("touchend", function () {
            this.dragging = false;
            this.parent.globalPosition.x = this.parent.position.x - this.parent.pivot._x;
            this.parent.globalPosition.y = this.parent.position.y - this.parent.pivot._y;
        });

        var rotateIcon = new PIXI.Sprite(PIXI.loader.resources[PATH + "rotate.png"].texture);
        rotateIcon.position.set(-offset - 43, -offset - 38);
        rotateIcon.interactive = true;
        rotateIcon.buttonMode = true;
        rotateIcon.on("touchstart", function (e) {
            this.dragging = true;
            var globalXY = e.data.global;
            this.parent.parent.data.rotation = this.parent.parent.rotation;
            var angle = getAngle({
                x: this.parent.parent.position.x,
                y: this.parent.parent.position.y
            }, globalXY);
            this.startRotation = angle;
        }).on("touchmove", function (e) {
            if (this.dragging) {
                var globalXY = e.data.global,
                    angle = getAngle({
                        x: this.parent.parent.position.x,
                        y: this.parent.parent.position.y
                    }, globalXY);
                this.parent.parent.rotation = angle - this.startRotation + this.parent.parent.data.rotation;
            }
        }).on("touchend", function () {
            this.dragging = false;
        });
        var closeIcon = new PIXI.Sprite(PIXI.loader.resources[PATH + "close.png"].texture);
        closeIcon.position.set(width + offset, -offset - 38);
        closeIcon.interactive = true;
        closeIcon.buttonMode = true;
        closeIcon.on("tap", function () {
            this.parent.parent.parent.removeChild(this.parent.parent);
        });
        othersCon.outline.addChild(rotateIcon, closeIcon);
    }

    function reDrawPeople(o, t) {
        var n = o.body,
            i = PIXI.Sprite.fromImage(t.clothUrl);
        i.position.set(t.clothPosition.x, t.clothPosition.y);
        if (t.hatUrl) {
            o.hair.visible = false;
            var e = PIXI.Sprite.fromImage(t.hatUrl);
            e.position.set(t.hatPosition.x, t.hatPosition.y);
            o.head.addChildAt(e, 2);
        }
        for (var a = (o.boneData, 0); a < 4; a++) {
            var l = o.boneData[a];
            if (t.part[a][0]) {
                var h = PIXI.Sprite.fromImage(t.part[a][0]);
                h.interactive = true;
                h.buttonMode = true;
                h.on("touchstart", function (o) {
                    computeRotate.call(this.parent.children[1], o)
                }).on("touchmove", function (o) {
                    rotateFunc.call(this.parent.children[1], o)
                });
                h.position.set(t.bones[a].bone1.position.x, t.bones[a].bone1.position.y);
                h.name = "addEdCloth";
                l.children[0].addChild(h);
            }
            if (t.part[a][1]) {
                var p = PIXI.Sprite.fromImage(t.part[a][1]);
                p.position.set(t.bones[a].bone2.position.x, t.bones[a].bone2.position.y);
                p.name = "addEdCloth";
                l.children[0].children[1].addChild(p);
            }
        }
        n.addChildAt(i, 1);
    }

    function changeCloth(currPerson) {
        if (currPerson.body.children.length > 1) {
            currPerson.hair.visible = true;
            if (currPerson.head.children.length == 4) {
                currPerson.head.removeChildAt(2);
            } else {
                3 == currPerson.facingTo && 3 == currPerson.head.children.length && currPerson.head.removeChildAt(2);
            }
            var t = currPerson.body;
            t.removeChildAt(t.children.length - 1);
            for (var n = 0; n < 4; n++) {
                var i = currPerson.boneData[n];
                if ("addEdCloth" == i.children[0].children[i.children[0].children.length - 1].name) {
                    i.children[0].removeChildAt(i.children[0].children.length - 1);
                }
                if ("addEdCloth" == i.children[0].children[1].children[i.children[0].children[1].children.length - 1].name) {
                    i.children[0].children[1].removeChildAt(i.children[0].children[1].children.length - 1)
                }
            }
        }
    }

    // t 是一个对象 包括hair 和 face 的数据
    function createBones(people, t) {
        var bones = people.data.bones;

        var bodyCon = new Container;
        var headCon = new Container;

        bodyCon.position.set(people.data.bodyPosition.x, people.data.bodyPosition.y);
        headCon.position.set(people.data.bodyPosition.x + people.data.headPosition.x, people.data.bodyPosition.y + people.data.headPosition.y);

        // 身体（躯干）
        var l = PIXI.Sprite.fromImage(people.data.bodyUrl);
        l.position.set(people.data.bodyImgPosition.x, people.data.bodyImgPosition.y);
        bodyCon.addChild(l);

        // 头（没有脸和头发）
        var p = PIXI.Sprite.fromImage(people.data.headUrl);
        headCon.addChild(p);
        // 脸
        if (t.face && t.face.url) {
            var s = PIXI.Sprite.fromImage(t.face.url);
            s.position.set(t.face.position.x, t.face.position.y);
            people.face = s;
            headCon.addChild(s);
        }
        // 头发
        var r = PIXI.Sprite.fromImage(t.hair.url);
        r.position.set(t.hair.position.x, t.hair.position.y);
        people.hair = r;

        headCon.addChild(r);

        bodyCon.interactive = true;
        bodyCon.buttonMode = true;
        bodyCon.on("touchstart", function (e) {
            this.dragging = true;
            this.startPosition = {
                x: e.data.global.x,
                y: e.data.global.y
            }
        }).on("touchmove", function (e) {
            if (this.dragging) {
                this.newPosition = {
                    x: e.data.global.x,
                    y: e.data.global.y
                };
                var parentX = this.newPosition.x - this.startPosition.x + this.parent.globalPosition.x + this.parent.pivot._x;
                var parentY = this.newPosition.y - this.startPosition.y + this.parent.globalPosition.y + this.parent.pivot._y;
                this.parent.position.set(parentX, parentY);
            }
        }).on("touchend", function () {
            this.dragging = false;
            this.parent.globalPosition.x = this.parent.position.x - this.parent.pivot._x;
            this.parent.globalPosition.y = this.parent.position.y - this.parent.pivot._y;
        });

        headCon.interactive = true;
        headCon.buttonMode = true;
        headCon.on("touchstart", function (e) {
            this.dragging = true;
            this.startPosition = {
                x: e.data.global.x,
                y: e.data.global.y
            }
        }).on("touchmove", function (e) {
            if (this.dragging) {
                this.newPosition = {
                    x: e.data.global.x,
                    y: e.data.global.y
                }
                var x = this.newPosition.x - this.startPosition.x + this.parent.globalPosition.x + this.parent.pivot._x;
                var y = this.newPosition.y - this.startPosition.y + this.parent.globalPosition.y + this.parent.pivot._y;
                this.parent.position.set(x, y);
            }
        }).on("touchend", function () {
            this.dragging = false;
            this.parent.globalPosition.x = this.parent.position.x - this.parent.pivot._x;
            this.parent.globalPosition.y = this.parent.position.y - this.parent.pivot._y;
        });

        people.head = headCon;
        people.body = bodyCon;

        var g = new Container;
        g.name = "hand";
        var c = new Container;
        c.name = "hand";
        var _ = new Container;
        _.name = "leg";
        var m = new Container;
        m.name = "leg";
        var b = new Container, d = [g, c, _, m];
        people.boneData = d;
        for (var f = 0; f < bones.length; f++) {
            var w = d[f],  // w 为四肢中的一肢
                v = bones[f],  // v 为这一肢对应的骨骼数据
                u = v.bone1,	// u 为肢体上部分数据（大腿和手臂）
                P = v.bone2; // p 为肢体下部分数据 （手掌和小腿对应的下部分）
            w.position.set(u.position.x + u.pivot.x, u.position.y + u.pivot.y);
            w.pivot.set(u.pivot.x, u.pivot.y);
            if (bones[f].boneRotate) {
                w.rotation = bones[f].boneRotate;
            }
            var k = new Container;
            k.name = "bone1";
            k.position.set(u.pivot.x, u.pivot.y);
            k.pivot.set(u.pivot.x, u.pivot.y);
            k.rotation = bones[f].bone1.rotation;
            // C 肢体的上半部分
            var C = PIXI.Sprite.fromImage(people.data.part[f][0]);
            k.addChild(C);
            C.interactive = true;
            C.buttonMode = true;
            C.on("touchstart", function (e) {
                computeRotate.call(this.parent.children[1], e);
            }).on("touchmove", function (e) {
                rotateFunc.call(this.parent.children[1], e);
            });
            var I = new PIXI.Graphics;
            I.beginFill(65535);
            I.drawCircle(0, 0, 2);
            I.endFill();
            I.position.set(u.position.x + u.pivot.x, u.position.y + u.pivot.y);

            var U = new PIXI.Graphics;
            U.beginFill(65535);
            U.drawCircle(0, 0, 2);
            U.endFill();
            U.position.set(P.position.x + P.pivot.x, P.position.y + P.pivot.y);
            // I.visible = false;
            // U.visible = false;
            b.addChild(I);

            var T = new Container;
            T.name = "bone2";
            var S = PIXI.Sprite.fromImage(people.data.part[f][1]),
                Graphics = new PIXI.Graphics;
            Graphics.position.set(v.end.position.x, v.end.position.y);
            T.addChild(S, Graphics);
            T.data = bones[f].bone2;
            T.rotation = bones[f].bone2.rotation;
            T.startRotation = 0;
            T.pivot.set(P.pivot.x, P.pivot.y);
            T.position.set(P.position.x + P.pivot.x, P.position.y + P.pivot.y);
            T.interactive = true;
            T.buttonMode = true;
            T.on("touchstart", computeRotate).on("touchmove", rotateFunc);
            k.addChild(T);
            w.addChild(k, U);
        }
        if (people.facingTo === 0) {
            people.addChild(_, m, bodyCon, g, c, b, headCon);
        } else if (people.facingTo === 3) {
            people.addChild(_, m, g, c, bodyCon, b, headCon);
        } else if (2 == people.facingTo) {
            people.addChild(g, _, m, bodyCon, c, b, headCon);
        } else if (1 == people.facingTo) {
            people.addChild(c, _, m, bodyCon, g, b, headCon);
        }
        var j = new Container;
        people.outline = j;
        people.addChild(j);
        if (1 == people.facingTo) {
            people.pivot.set(0, people.height / 2);
            people.position.set(people.globalPosition.x + people.width / 2, people.globalPosition.y + people.height / 2);
            0 == people.sex ? people.globalPosition.x += 150 : people.globalPosition.x += 130;
            people.outline.position.set(-people.width / 2, 0);
        } else {
            if (0 == people.pivot._x) {
                0 == people.sex ? people.globalPosition.x -= 150 : 1 == people.sex && (people.globalPosition.x -= 130);
            }
            people.pivot.set(people.width / 2, people.height / 2);
            people.position.set(people.globalPosition.x + people.width / 2, people.globalPosition.y + people.height / 2);
        }
    }

    function getDistance(point, point2) {
        var dis = Math.sqrt(Math.pow(point2.x - point.x, 2) + Math.pow(point2.y - point.y, 2));
        return dis
    }

    function computeRotate(o) {
        this.dragging = true;
        this.data.rotation = this.parent.parent.rotation;
        var t = o.data.global;
        this.startPosition = {
            x: t.x,
            y: t.y
        };
        var n = getAngle({
            x: this.parent.parent.getGlobalPosition().x,
            y: this.parent.parent.getGlobalPosition().y
        }, t);
        this.startRotation = n;
        this.dragSrartPosition = {
            x: this.children[1].getGlobalPosition().x,
            y: this.children[1].getGlobalPosition().y
        };
        this.a = getDistance(this.dragSrartPosition, this.getGlobalPosition());
        this.b = getDistance(this.getGlobalPosition(), this.parent.getGlobalPosition())
    }

    function rotateFunc(o) {
        if (this.dragging) {
            var t = o.data.global,
                n = getAngle({
                    x: this.parent.parent.getGlobalPosition().x,
                    y: this.parent.parent.getGlobalPosition().y
                }, t),
                i = true;
            i = this.startRotation <= Math.PI ? n - this.startRotation < Math.PI && n - this.startRotation > 0 : !(n - this.startRotation < 0 && n - this.startRotation > -Math.PI), this.parent.parent.rotation = n - this.startRotation + this.data.rotation;
            var e = t.y - this.startPosition.y + this.dragSrartPosition.y - this.parent.getGlobalPosition().y,
                a = t.x - this.startPosition.x + this.dragSrartPosition.x - this.parent.getGlobalPosition().x,
                l = Math.sqrt(e * e + a * a),
                h = this.a,
                p = this.b,
                s = 0,
                r = 0;
            l >= h + p ? (s = 0, r = 0) : (s = Math.acos((p * p + l * l - h * h) / (2 * p * l)), r = Math.acos((h * h + l * l - p * p) / (2 * h * l)));
            isNaN(s) || isNaN(r) || (0 == this.parent.parent.parent.facingTo || 3 == this.parent.parent.parent.facingTo || "hand" == this.parent.parent.name ? i ? (this.parent.rotation = -s, this.rotation = s + r) : (this.parent.rotation = s, this.rotation = -s - r) : 1 == this.parent.parent.parent.facingTo ? (this.parent.rotation = s, this.rotation = -s - r) : (this.parent.rotation = -s, this.rotation = s + r));
        }
    }

    function initRotate(people) {
        people.outline.removeChildren();
        var t = new PIXI.Graphics;
        t.lineStyle(1, 16777215, 1);
        var n = people.width, i = people.height;
        3 != people.facingTo && 6 == people.faceIndex && (i -= 130);
        t.moveTo(0, 0);
        drawDashLine(t, 0, 0, n, 0);
        drawDashLine(t, n, 0, n, i);
        drawDashLine(t, n, i, 0, i);
        drawDashLine(t, 0, i, 0, 0);
        people.outline.addChild(t);
        var a = new PIXI.Sprite(PIXI.loader.resources[PATH + "rotate.png"].texture);
        a.position.set(-43, -38);
        a.interactive = true;
        a.buttonMode = true;
        a.on("touchstart", function (e) {
            this.dragging = true;
            var t = e.data.global;
            this.parent.parent.data.rotation = this.parent.parent.rotation;
            var n = getAngle({
                x: this.parent.parent.position.x,
                y: this.parent.parent.position.y
            }, t);
            this.startRotation = n;
        }).on("touchmove", function (e) {
            if (this.dragging) {
                var t = e.data.global,
                    n = getAngle({
                        x: this.parent.parent.position.x,
                        y: this.parent.parent.position.y
                    }, t);
                this.parent.parent.rotation = n - this.startRotation + this.parent.parent.data.rotation
            }
        }).on("touchend", function () {
            this.dragging = false
        });
        var l = new PIXI.Sprite(PIXI.loader.resources[PATH + "close.png"].texture);
        l.position.set(n, -38);
        l.interactive = true;
        l.buttonMode = true;
        l.on("tap", function () {
            PeoplesArr.delete(this.parent.parent);
            this.parent.parent.parent.removeChild(this.parent.parent);
            if (PeoplesArr.length) {
                changeMenuStatus(PeoplesArr[PeoplesArr.length - 1].sex, PeoplesArr[PeoplesArr.length - 1])
            } else {
                changeMenuStatus(-100)
            }
        });
        people.outline.addChild(a, l);
    }

    function offsetMenu(tagLi) {
        var i = tagLi.index();
        i > 2 ? tagLi.parent().parent().animate({
            scrollLeft: 130 * (i - 2) + "px"
        }, 300) : tagLi.parent().parent().animate({
            scrollLeft: "0px"
        }, 300);
    }

    function handleCurPerson(currPerson) {
        if (currPerson != selectedContainer.children[0]) {
            if (selectedContainer.children.length) {
                var person = selectedContainer.children[0];
                person.chosen = false;
                person.outline.visible = false;
                unselectedContainer.addChild(person);
                selectedContainer.removeChildren();
            }
            changeMenuStatus(currPerson.sex, currPerson);
            selectedContainer.addChild(currPerson);
            unselectedContainer.removeChild(currPerson);
            currPerson.chosen = true;
        }
    }

    $(".scroll_bar ul li").bind("click", function () {
        if (!$(this).hasClass("selected")) {
            $(".category_main").hasClass("close") && $(".category_main").removeClass("close");
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
            var curIndex = $(this).index();
            var n = PeoplesArr[PeoplesArr.length - 1];
            if (n) {
                curIndex > 0 && curIndex < 5 && (n.currentSelectIndex = curIndex);
                itemAnimate(n);
            }
            $(".category_item").hide();
            $(".category_item").eq(curIndex).show();
            $(".black_arrow").css({
                left: 100 * curIndex
            });
            curIndex > 3 ? $(".scroll_bar").animate({
                scrollLeft: "50px"
            }, 300) : $(".scroll_bar").animate({
                scrollLeft: "0px"
            }, 300)
        }
    });


    $(".arrow_box").bind("click", function () {
        if ($(".category_main").hasClass("close")) {
            $(".category_main").removeClass("close");
            $(".black_arrow").show();
        } else {
            $(".category_main").addClass("close");
            $(".black_arrow").hide();
        }
    });


    $(".category_people li").bind("click", function () {
        var i = $(this).index();
        $(".category_guide").hide()
        $(".save").show()
        $(".category_people li").removeClass("active")
        $(this).addClass("active")
        if (!selectedContainer.children.length) {
            var newPeople = createNewPeople(i);
            selectedContainer.addChild(newPeople);
        } else if (1 == selectedContainer.children.length) {
            var curr = selectedContainer.children[0];
            unselectedContainer.addChild(curr);
            curr.chosen = false;
            curr.outline.visible = false;
            selectedContainer.removeChildren();
            var newPeople = createNewPeople(i);
            selectedContainer.addChild(newPeople);
        }
        setTimeout(function () {
            $(".category_people li").eq(i).removeClass("active")
        }, 300);
    });


    $(".man_facingTo li").bind("click", function () {
        var currPerson = PeoplesArr[PeoplesArr.length - 1];
        handleCurPerson(currPerson);
        var i = $(this).index();
        $(".man_facingTo li").removeClass("active");
        $(this).addClass("active");
        changeFacingTo(currPerson, i);
    });


    $(".woman_facingTo li").bind("click", function () {
        var currPerson = PeoplesArr[PeoplesArr.length - 1];
        handleCurPerson(currPerson);
        var index = $(this).index();
        $(".woman_facingTo li").removeClass("active");
        $(this).addClass("active");
        changeFacingTo(currPerson, index);
    });


    $(".man_cloth li").bind("click", function () {
        var currPerson = PeoplesArr[PeoplesArr.length - 1];
        handleCurPerson(currPerson);
        var index = $(this).index();
        currPerson.clothIndex = index;
        $(".man_cloth li").removeClass("active");
        $(this).addClass("active");
        changeCloth(currPerson);
        reDrawPeople(currPerson, manClothsAll[currPerson.facingTo][index]);
        offsetMenu($(this));
    });


    $(".woman_cloth li").bind("click", function () {
        var currPerson = PeoplesArr[PeoplesArr.length - 1];
        handleCurPerson(currPerson);
        var index = $(this).index();
        currPerson.clothIndex = index;
        $(".woman_cloth li").removeClass("active");
        $(this).addClass("active");
        changeCloth(currPerson);
        reDrawPeople(currPerson, womanClothsAll[currPerson.facingTo][index]);
        offsetMenu($(this));
    });


    $(".man_face li").bind("click", function () {
        var currPerson = PeoplesArr[PeoplesArr.length - 1];
        handleCurPerson(currPerson);
        var index = $(this).index();
        $(".man_face li").removeClass("active");
        $(this).addClass("active");
        changeFace(currPerson, index);
        offsetMenu($(this));
    });

    $(".woman_face li").bind("click", function () {
        var currPerson = PeoplesArr[PeoplesArr.length - 1];
        handleCurPerson(currPerson);
        var index = $(this).index();
        $(".woman_face li").removeClass("active");
        $(this).addClass("active");
        changeFace(currPerson, index);
        offsetMenu($(this));
    });

    $(".man_hair li").bind("click", function () {
        var currPerson = PeoplesArr[PeoplesArr.length - 1];
        handleCurPerson(currPerson);
        var index = $(this).index();
        $(".man_hair li").removeClass("active");
        $(this).addClass("active");
        changeHair(currPerson, index);
        offsetMenu($(this));
    });


    $(".woman_hair li").bind("click", function () {
        var currPerson = PeoplesArr[PeoplesArr.length - 1];
        handleCurPerson(currPerson);
        var index = $(this).index();
        $(".woman_hair li").removeClass("active");
        $(this).addClass("active");
        changeHair(currPerson, index);
        offsetMenu($(this));
    });

    $(".room li").bind("click", function () {
        $(".save").show();
        var index = $(this).index();
        $(".room li").removeClass("active");
        $(this).addClass("active");
        changeRooms(index);
    });

    $(".others li").bind("click", function () {
        $(".save").show();
        var index = $(this).index();
        $(".others li").removeClass("active");
        $(this).addClass("active");
        addOthers(index);
        offsetMenu($(this));
        setTimeout(function () {
            $(".others li").eq(index).removeClass("active");
        }, 300);
    });

    $(".flag li").bind("click", function () {
        $(".save").show();
        var index = $(this).index();
        $(".flag li").removeClass("active");
        $(this).addClass("active");
        changeFlag(index);
        offsetMenu($(this));
        setTimeout(function () {
            $(".flag li").eq(index).removeClass("active")
        }, 300);
    });

    $(".start").bind("click", function () {
        $(".welcome_layer").fadeOut(300);
        $(".world_cup_layer").show();
    });

    $(".welcome_layer").bind("click", function () {
        $(".welcome_layer").fadeOut(300);
        $(".world_cup_layer").show();
    });

    $(".guide").bind("click", function () {
        $(".guide").fadeOut(300);
    });

    // $(".man_cloth li").eq(1).hide();
    // $(".woman_cloth li").eq(1).hide();
    // $(".man_cloth, .woman_cloth").width(1210);
    $(".others ul").width(2120);

    $(".save").bind("click", function () {
        $(".category").hide();
        new TWEEN.Tween(thirdContainer.scale).to({
            x: .933,
            y: .933
        }, 200).onUpdate(function () {
            thirdContainer.position.set((1 - this.x) / .067 * 25, (1 - this.y) / .067 * 25)
        }).start();
        if (selectedContainer.children.length) {
            for (var i = 0; i < selectedContainer.children.length; i++) {
                var person = selectedContainer.children[i];
                person.chosen = false;
                person.outline.visible = false;
                unselectedContainer.addChild(person);
                selectedContainer.removeChild(person);
            }
        }
        shareContainer.visible = true;
        setTimeout(function () {
            var img = new Image;
            img.src = $("canvas")[0].toDataURL("image/png");
            $(".result_img").append(img);
            $(".result_img").show();
            $(".saved_img").append(img);
            $(".saved_img").show();
            setTimeout(function () {
                $(".saved_guide").fadeIn(300);
                setTimeout(function () {
                    $(".saved_guide").fadeOut(300);
                }, 3000);
            }, 500);
        }, 230);
    });
}(jQuery);
