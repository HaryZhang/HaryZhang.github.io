var T = "./images/";
var z = [
    {
        bodyUrl: T + "man/body.png",
        bodyPosition: {
            x: 159,
            y: 30
        },
        bodyImgPosition: {
            x: 0,
            y: 80
        },
        headUrl: T + "man/head.png",
        headPosition: {
            x: 6,
            y: -20
        },
        facingTo: 0,
        part: [
            [T + "man/left_arm.png", T + "man/left_hand.png"],
            [T + "man/right_arm.png", T + "man/right_hand.png"],
            [T + "man/left_leg.png", T + "man/left_foot.png"],
            [T + "man/right_leg.png", T + "man/right_foot.png"]
        ],
        globalPosition: {
            x: 420,
            y: 250
        },
        bones: [
            {
                bone1: {
                    position: {
                        x: 89,
                        y: 149
                    },
                    pivot: {
                        x: 80,
                        y: 18
                    },
                    rotation: 0
                },
                bone2: {
                    position: {
                        x: -8,
                        y: 64
                    },
                    pivot: {
                        x: 26,
                        y: 12
                    },
                    rotation: .6
                },
                end: {
                    position: {
                        x: 19,
                        y: 80
                    }
                }
            },
            {
                bone1: {
                    position: {
                        x: 264,
                        y: 149
                    },
                    pivot: {
                        x: 16,
                        y: 16
                    },
                    rotation: 0
                },
                bone2: {
                    position: {
                        x: 58,
                        y: 70
                    },
                    pivot: {
                        x: 18,
                        y: 18
                    },
                    rotation: 0
                },
                end: {
                    position: {
                        x: 96,
                        y: 80
                    }
                }
            },
            {
                bone1: {
                    position: {
                        x: 172,
                        y: 289
                    },
                    pivot: {
                        x: 20,
                        y: 22
                    },
                    rotation: 0
                },
                bone2: {
                    position: {
                        x: -28,
                        y: 130
                    },
                    pivot: {
                        x: 46,
                        y: 18
                    },
                    rotation: 0
                },
                end: {
                    position: {
                        x: 22,
                        y: 123
                    }
                }
            },
            {
                bone1: {
                    position: {
                        x: 239,
                        y: 289
                    },
                    pivot: {
                        x: 20,
                        y: 22
                    },
                    rotation: 0
                },
                bone2: {
                    position: {
                        x: -30,
                        y: 130
                    },
                    pivot: {
                        x: 48,
                        y: 16
                    },
                    rotation: 0
                },
                end: {
                    position: {
                        x: 22,
                        y: 123
                    }
                }
            }]
    },
    {
        bodyUrl: T + "man_left/body.png",
        bodyPosition: {
            x: 0,
            y: 30
        },
        bodyImgPosition: {
            x: 0,
            y: 70
        },
        headUrl: T + "man_left/head.png",
        headPosition: {
            x: 0,
            y: -28
        },
        facingTo: 1,
        part: [
            [T + "man_left/left_arm.png", T + "man_left/left_hand.png"],
            [T + "man_left/right_arm.png", T + "man_left/right_hand.png"],
            [T + "man_left/left_leg.png", T + "man_left/left_foot.png"],
            [T + "man_left/right_leg.png", T + "man_left/right_foot.png"]
        ],
        globalPosition: {
            x: 250,
            y: 302
        },
        bones: [{
            boneRotate: 0,
            bone1: {
                position: {
                    x: 18,
                    y: 140
                },
                pivot: {
                    x: 38,
                    y: 15
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -53,
                    y: 76
                },
                pivot: {
                    x: 70,
                    y: 14
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 17,
                    y: 51
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: -40,
                    y: 136
                },
                pivot: {
                    x: 70,
                    y: 16
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -70,
                    y: 52
                },
                pivot: {
                    x: 80,
                    y: 18
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 19,
                    y: 73
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 4,
                    y: 278
                },
                pivot: {
                    x: 36,
                    y: 20
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -49,
                    y: 100
                },
                pivot: {
                    x: 68,
                    y: 20
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 23,
                    y: 119
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 56,
                    y: 278
                },
                pivot: {
                    x: 18,
                    y: 20
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -8,
                    y: 106
                },
                pivot: {
                    x: 40,
                    y: 22
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 23,
                    y: 126
                }
            }
        }]
    },
    {
        bodyUrl: T + "man_right/body.png",
        bodyPosition: {
            x: 0,
            y: 3
        },
        bodyImgPosition: {
            x: 6,
            y: 70
        },
        headUrl: T + "man_right/head.png",
        headPosition: {
            x: 7,
            y: -30
        },
        facingTo: 2,
        part: [
            [T + "man_right/left_arm.png", T + "man_right/left_hand.png"],
            [T + "man_right/right_arm.png", T + "man_right/right_hand.png"],
            [T + "man_right/left_leg.png", T + "man_right/left_foot.png"],
            [T + "man_right/right_leg.png", T + "man_right/right_foot.png"]
        ],
        globalPosition: {
            x: 250,
            y: 302
        },
        bones: [{
            boneRotate: 0,
            bone1: {
                position: {
                    x: 48,
                    y: 100
                },
                pivot: {
                    x: 17,
                    y: 17
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: 54,
                    y: 50
                },
                pivot: {
                    x: 16,
                    y: 18
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 118,
                    y: 73
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 38,
                    y: 110
                },
                pivot: {
                    x: 17,
                    y: 17
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: 22,
                    y: 68
                },
                pivot: {
                    x: 16,
                    y: 16
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 126,
                    y: 51
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 12,
                    y: 253
                },
                pivot: {
                    x: 26,
                    y: 22
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -14,
                    y: 110
                },
                pivot: {
                    x: 32,
                    y: 21
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 54,
                    y: 126
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 61,
                    y: 253
                },
                pivot: {
                    x: 21,
                    y: 22
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: 17,
                    y: 100
                },
                pivot: {
                    x: 20,
                    y: 22
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 71,
                    y: 119
                }
            }
        }]
    },
    {
        bodyUrl: T + "man_back/body.png",
        bodyPosition: {
            x: 159,
            y: 30
        },
        bodyImgPosition: {
            x: 0,
            y: 80
        },
        headUrl: T + "man_back/head.png",
        headPosition: {
            x: 2,
            y: -20
        },
        facingTo: 0,
        part: [
            [T + "man_back/left_arm.png", T + "man_back/left_hand.png"],
            [T + "man_back/right_arm.png", T + "man_back/right_hand.png"],
            [T + "man_back/left_leg.png", T + "man_back/left_foot.png"],
            [T + "man_back/right_leg.png", T + "man_back/right_foot.png"]
        ],
        globalPosition: {
            x: 420,
            y: 250
        },
        bones: [
            {
                bone1: {
                    position: {
                        x: 90,
                        y: 149
                    },
                    pivot: {
                        x: 84,
                        y: 15
                    },
                    rotation: 0
                },
                bone2: {
                    position: {
                        x: -12,
                        y: 64
                    },
                    pivot: {
                        x: 24,
                        y: 16
                    },
                    rotation: .6
                },
                end: {
                    position: {
                        x: 19,
                        y: 80
                    }
                }
            },
            {
                bone1: {
                    position: {
                        x: 262,
                        y: 149
                    },
                    pivot: {
                        x: 16,
                        y: 16
                    },
                    rotation: 0
                },
                bone2: {
                    position: {
                        x: 58,
                        y: 70
                    },
                    pivot: {
                        x: 18,
                        y: 16
                    },
                    rotation: 0
                },
                end: {
                    position: {
                        x: 96,
                        y: 80
                    }
                }
            },
            {
                bone1: {
                    position: {
                        x: 172,
                        y: 292
                    },
                    pivot: {
                        x: 20,
                        y: 18
                    },
                    rotation: 0
                },
                bone2: {
                    position: {
                        x: -30,
                        y: 130
                    },
                    pivot: {
                        x: 51,
                        y: 18
                    },
                    rotation: 0
                },
                end: {
                    position: {
                        x: 22,
                        y: 123
                    }
                }
            },
            {
                bone1: {
                    position: {
                        x: 238,
                        y: 292
                    },
                    pivot: {
                        x: 20,
                        y: 18
                    },
                    rotation: 0
                },
                bone2: {
                    position: {
                        x: -30,
                        y: 130
                    },
                    pivot: {
                        x: 51,
                        y: 16
                    },
                    rotation: 0
                },
                end: {
                    position: {
                        x: 22,
                        y: 123
                    }
                }
            }]
    }
];

var manCloths = [
    {
        clothUrl: T + "man/cloth0/cloth.png",
        clothPosition: {
            x: 2,
            y: 110
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "man/cloth0/left_leg.png", 0],
            [T + "man/cloth0/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -14,
                        y: 4
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -13,
                        y: 4
                    }
                }
            }]
    },
    {
        clothUrl: T + "man/cloth1/body.png",
        clothPosition: {
            x: -2,
            y: 102
        },
        part: [
            [T + "man/cloth1/left_arm.png", 0],
            [T + "man/cloth1/right_arm.png", 0],
            [T + "man/cloth1/left_leg.png", 0],
            [T + "man/cloth1/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 8,
                    y: -3
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -12,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -14,
                    y: -4
                }
            }
        }]
    },
    {
        clothUrl: T + "man/cloth2/body.png",
        clothPosition: {
            x: -2,
            y: 94
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "man/cloth2/left_leg.png", 0],
            [T + "man/cloth2/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -15,
                        y: 10
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -15,
                        y: 10
                    }
                }
            }]
    },
    {
        clothUrl: T + "man/cloth3/body.png",
        clothPosition: {
            x: 0,
            y: 100
        },
        part: [
            [T + "man/cloth3/left_arm.png", 0],
            [T + "man/cloth3/right_arm.png", 0],
            [T + "man/cloth3/left_leg.png", 0],
            [T + "man/cloth3/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 8,
                    y: -3
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: -4
                }
            }
        }]
    },
    {
        clothUrl: T + "man/cloth4/cloth.png",
        clothPosition: {
            x: 31,
            y: 108
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "man/cloth5/body.png",
        clothPosition: {
            x: -2,
            y: 109  
        },
        part: [
            [T + "man/cloth5/left_arm.png", 0],
            [T + "man/cloth5/right_arm.png", 0],
            [T + "man/cloth5/left_leg.png", 0],
            [T + "man/cloth5/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 20,
                    y: -1
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -12,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -14,
                    y: -4
                }
            }
        }]
    },
    {
        clothUrl: T + "man/cloth6/body.png",
        clothPosition: {
            x: 0,
            y: 110
        },
        part: [
            [T + "man/cloth6/left_arm.png", 0],
            [T + "man/cloth6/right_arm.png", 0],
            [T + "man/cloth6/left_leg.png", 0],
            [T + "man/cloth6/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 21,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -12,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -14,
                    y: -4
                }
            }
        }]
    },
    {
        clothUrl: T + "man/cloth7/body.png",
        clothPosition: {
            x: -2,
            y: 104
        },
        part: [
            [T + "man/cloth7/left_arm.png", 0],
            [T + "man/cloth7/right_arm.png", 0],
            [T + "man/cloth7/left_leg.png", 0],
            [T + "man/cloth7/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 22,
                    y: -3
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -12,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -14,
                    y: -4
                }
            }
        }]
    }
];

var manBackCloths = [
    {
        clothUrl: T + "man_back/cloth0/cloth.png",
        clothPosition: {
            x: 1,
            y: 110
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "man_back/cloth0/left_leg.png", 0],
            [T + "man_back/cloth0/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -12,
                        y: 2
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -9,
                        y: 2
                    }
                }
            }]
    },
    {
        clothUrl: T + "man_back/cloth1/body.png",
        clothPosition: {
            x: -3,
            y: 109
        },
        part: [
            [T + "man_back/cloth1/left_arm.png", 0],
            [T + "man_back/cloth1/right_arm.png", 0],
            [T + "man_back/cloth1/left_leg.png", 0],
            [T + "man_back/cloth1/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 0,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -14,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -15,
                    y: -4
                }
            }
        }]
    },
    {
        clothUrl: T + "man_back/cloth2/body.png",
        clothPosition: {
            x: 8,
            y: 106
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "man_back/cloth2/left_leg.png", 0],
            [T + "man_back/cloth2/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -10,
                        y: -3
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -10,
                        y: -3
                    }
                }
            }]
    },
    {
        clothUrl: T + "man_back/cloth3/body.png",
        clothPosition: {
            x: 5,
            y: 110
        },
        part: [
            [T + "man_back/cloth3/left_arm.png", 0],
            [T + "man_back/cloth3/right_arm.png", 0],
            [T + "man_back/cloth3/left_leg.png", 0],
            [T + "man_back/cloth3/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 0,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: -4
                }
            }
        }]
    },
    {
        clothUrl: T + "man_back/cloth4/cloth.png",
        clothPosition: {
            x: 21,
            y: 109
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "man_back/cloth5/body.png",
        clothPosition: {
            x: -3,
            y: 109
        },
        part: [
            [T + "man_back/cloth5/left_arm.png", 0],
            [T + "man_back/cloth5/right_arm.png", 0],
            [T + "man_back/cloth5/left_leg.png", 0],
            [T + "man_back/cloth5/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 16,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -14,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -15,
                    y: -4
                }
            }
        }]
    },
    {
        clothUrl: T + "man_back/cloth6/body.png",
        clothPosition: {
            x: 0,
            y: 113
        },
        part: [
            [T + "man_back/cloth6/left_arm.png", 0],
            [T + "man_back/cloth6/right_arm.png", 0],
            [T + "man_back/cloth6/left_leg.png", 0],
            [T + "man_back/cloth6/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 18,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -14,
                    y: 4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -15,
                    y: 4
                }
            }
        }]
    },
    {
        clothUrl: T + "man_back/cloth7/body.png",
        clothPosition: {
            x: -3,
            y: 111
        },
        part: [
            [T + "man_back/cloth7/left_arm.png", 0],
            [T + "man_back/cloth7/right_arm.png", 0],
            [T + "man_back/cloth7/left_leg.png", 0],
            [T + "man_back/cloth7/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 22,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -14,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -15,
                    y: -4
                }
            }
        }]
    }
];

var manRightCloths = [
    {
        clothUrl: T + "man_right/cloth0/cloth.png",
        clothPosition: {
            x: 6,
            y: 91
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "man_right/cloth0/left_leg.png", 0],
            [T + "man_right/cloth0/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -10,
                        y: -2
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: 0,
                        y: -2
                    }
                }
            }]
    },
    {
        clothUrl: T + "man_right/cloth1/body.png",
        clothPosition: {
            x: 4,
            y: 88
        },
        part: [
            [T + "man_right/cloth1/left_arm.png", 0],
            [T + "man_right/cloth1/right_arm.png", 0],
            [T + "man_right/cloth1/left_leg.png", 0],
            [T + "man_right/cloth1/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -15,
                    y: -6
                }
            }
        }, {
            bone1: {
                position: {
                    x: -5,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -6,
                    y: 6
                }
            }
        }]
    },
    {
        clothUrl: T + "man_right/cloth2/body.png",
        clothPosition: {
            x: 15,
            y: 98
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "man_right/cloth2/left_leg.png", 0],
            [T + "man_right/cloth2/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -15,
                        y: 4
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -6,
                        y: 10
                    }
                }
            }]
    },
    {
        clothUrl: T + "man_right/cloth3/body.png",
        clothPosition: {
            x: 8,
            y: 88
        },
        part: [
            [T + "man_right/cloth3/left_arm.png", 0],
            [T + "man_right/cloth3/right_arm.png", 0],
            [T + "man_right/cloth3/left_leg.png", 0],
            [T + "man_right/cloth3/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -15,
                    y: -8
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -6,
                    y: -9
                }
            }
        }, {
            bone1: {
                position: {
                    x: -2,
                    y: -6
                }
            }
        }]
    },
    {
        clothUrl: T + "man_right/cloth4/cloth.png",
        clothPosition: {
            x: 5,
            y: 92
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "man_right/cloth5/body.png",
        clothPosition: {
            x: 4,
            y: 88
        },
        part: [
            [T + "man_right/cloth5/left_arm.png", 0],
            [T + "man_right/cloth5/right_arm.png", 0],
            [T + "man_right/cloth5/left_leg.png", 0],
            [T + "man_right/cloth5/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -7,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -5,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -2,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -2,
                    y: -2
                }
            }
        }]
    },
    {
        clothUrl: T + "man_right/cloth6/body.png",
        clothPosition: {
            x: 4,
            y: 88
        },
        part: [
            [T + "man_right/cloth6/left_arm.png", 0],
            [T + "man_right/cloth6/right_arm.png", 0],
            [T + "man_right/cloth6/left_leg.png", 0],
            [T + "man_right/cloth6/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -6,
                    y: -6
                }
            }
        }, {
            bone1: {
                position: {
                    x: -2,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: 6
                }
            }
        }, {
            bone1: {
                position: {
                    x: -6,
                    y: 6
                }
            }
        }]
    },
    {
        clothUrl: T + "man_right/cloth7/body.png",
        clothPosition: {
            x: 4,
            y: 88
        },
        part: [
            [T + "man_right/cloth7/left_arm.png", 0],
            [T + "man_right/cloth7/right_arm.png", 0],
            [T + "man_right/cloth7/left_leg.png", 0],
            [T + "man_right/cloth7/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -8,
                    y: -6
                }
            }
        }, {
            bone1: {
                position: {
                    x: -6,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: 6
                }
            }
        }, {
            bone1: {
                position: {
                    x: 0,
                    y: 6
                }
            }
        }]
    }
];

var manLeftCloths = [
    {
        clothUrl: T + "man_left/cloth0/cloth.png",
        clothPosition: {
            x: -2,
            y: 91
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "man_left/cloth0/left_leg.png", 0],
            [T + "man_left/cloth0/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -10,
                        y: 0
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -4,
                        y: 0
                    }
                }
            }]
    },
    {
        clothUrl: T + "man_left/cloth1/body.png",
        clothPosition: {
            x: -2,
            y: 88
        },
        part: [
            [T + "man_left/cloth1/left_arm.png", 0],
            [T + "man_left/cloth1/right_arm.png", 0],
            [T + "man_left/cloth1/left_leg.png", 0],
            [T + "man_left/cloth1/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -7,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -7,
                    y: -1
                }
            }
        }, {
            bone1: {
                position: {
                    x: -6,
                    y: 10
                }
            }
        }, {
            bone1: {
                position: {
                    x: -8,
                    y: 7
                }
            }
        }]
    },
    {
        clothUrl: T + "man_left/cloth2/body.png",
        clothPosition: {
            x: -6,
            y: 91
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "man_left/cloth2/left_leg.png", 0],
            [T + "man_left/cloth2/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -14,
                        y: 15
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: 0,
                        y: 10
                    }
                }
            }]
    },
    {
        clothUrl: T + "man_left/cloth3/body.png",
        clothPosition: {
            x: 0,
            y: 88
        },
        part: [
            [T + "man_left/cloth3/left_arm.png", 0],
            [T + "man_left/cloth3/right_arm.png", 0],
            [T + "man_left/cloth3/left_leg.png", 0],
            [T + "man_left/cloth3/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 0,
                    y: -3
                }
            }
        }, {
            bone1: {
                position: {
                    x: 2,
                    y: -3
                }
            }
        }, {
            bone1: {
                position: {
                    x: -6,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }]
    },
    {
        clothUrl: T + "man_left/cloth4/cloth.png",
        clothPosition: {    
            x: -2,
            y: 90
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "man_left/cloth5/body.png",
        clothPosition: {
            x: -2,
            y: 88
        },
        part: [
            [T + "man_left/cloth5/left_arm.png", 0],
            [T + "man_left/cloth5/right_arm.png", 0],
            [T + "man_left/cloth5/left_leg.png", 0],
            [T + "man_left/cloth5/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 0,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: 11,
                    y: -1
                }
            }
        }, {
            bone1: {
                position: {
                    x: -6,
                    y: 10
                }
            }
        }, {
            bone1: {
                position: {
                    x: -8,
                    y: 7
                }
            }
        }]
    },
    {
        clothUrl: T + "man_left/cloth6/body.png",
        clothPosition: {
            x: -2,
            y: 88
        },
        part: [
            [T + "man_left/cloth6/left_arm.png", 0],
            [T + "man_left/cloth6/right_arm.png", 0],
            [T + "man_left/cloth6/left_leg.png", 0],
            [T + "man_left/cloth6/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 2,
                    y: -1
                }
            }
        }, {
            bone1: {
                position: {
                    x: 10,
                    y: -1
                }
            }
        }, {
            bone1: {
                position: {
                    x: -6,
                    y: 10
                }
            }
        }, {
            bone1: {
                position: {
                    x: -4,
                    y: 10
                }
            }
        }]
    },
    {
        clothUrl: T + "man_left/cloth7/body.png",
        clothPosition: {
            x: -2,
            y: 88
        },
        part: [
            [T + "man_left/cloth7/left_arm.png", 0],
            [T + "man_left/cloth7/right_arm.png", 0],
            [T + "man_left/cloth7/left_leg.png", 0],
            [T + "man_left/cloth7/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 0,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: 6,
                    y: -1
                }
            }
        }, {
            bone1: {
                position: {
                    x: -6,
                    y: 10
                }
            }
        }, {
            bone1: {
                position: {
                    x: 0,
                    y: 10
                }
            }
        }]
    }
];

var Z = [
    {
        bodyUrl: T + "woman/body.png",
        bodyPosition: {
            x: 142,
            y: 40
        },
        bodyImgPosition: {
            x: 0,
            y: 73
        },
        headUrl: T + "woman/head.png",
        headPosition: {
            x: 0,
            y: -30
        },
        facingTo: 0,
        part: [
            [T + "woman/left_arm.png", T + "woman/left_hand.png"],
            [T + "woman/right_arm.png", T + "woman/right_hand.png"],
            [T + "woman/left_leg.png", T + "woman/left_foot.png"],
            [T + "woman/right_leg.png", T + "woman/right_foot.png"]
        ],
        globalPosition: {
            x: 420,
            y: 250
        },
        bones: [{
            bone1: {
                position: {
                    x: 67,
                    y: 147
                },
                pivot: {
                    x: 82,
                    y: 15
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -5,
                    y: 55
                },
                pivot: {
                    x: 20,
                    y: 20
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 15,
                    y: 80
                }
            }
        }, {
            bone1: {
                position: {
                    x: 235,
                    y: 148
                },
                pivot: {
                    x: 13,
                    y: 15
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: 61,
                    y: 70
                },
                pivot: {
                    x: 16,
                    y: 18
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 93,
                    y: 80
                }
            }
        }, {
            bone1: {
                position: {
                    x: 150,
                    y: 290
                },
                pivot: {
                    x: 20,
                    y: 24
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -33,
                    y: 130
                },
                pivot: {
                    x: 50,
                    y: 15
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 41,
                    y: 112
                }
            }
        }, {
            bone1: {
                position: {
                    x: 215,
                    y: 290
                },
                pivot: {
                    x: 22,
                    y: 24
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -32,
                    y: 130
                },
                pivot: {
                    x: 48,
                    y: 15
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 41,
                    y: 112
                }
            }
        }]
    },
    {
        bodyUrl: T + "woman_left/body.png",
        bodyPosition: {
            x: 0,
            y: 8
        },
        bodyImgPosition: {
            x: 0,
            y: 73
        },
        headUrl: T + "woman_left/head.png",
        headPosition: {
            x: 0,
            y: -35
        },
        facingTo: 3,
        part: [
            [T + "woman_left/left_arm.png", T + "woman_left/left_hand.png"],
            [T + "woman_left/right_arm.png", T + "woman_left/right_hand.png"],
            [T + "woman_left/left_leg.png", T + "woman_left/left_foot.png"],
            [T + "woman_left/right_leg.png", T + "woman_left/right_foot.png"]
        ],
        globalPosition: {
            x: 250,
            y: 302
        },
        bones: [{
            boneRotate: 0,
            bone1: {
                position: {
                    x: 28,
                    y: 114
                },
                pivot: {
                    x: 40,
                    y: 8
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -50,
                    y: 70
                },
                pivot: {
                    x: 70,
                    y: 15
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 16,
                    y: 39
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: -35,
                    y: 110
                },
                pivot: {
                    x: 80,
                    y: 20
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -70,
                    y: 55
                },
                pivot: {
                    x: 85,
                    y: 15
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 15,
                    y: 50
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 0,
                    y: 253
                },
                pivot: {
                    x: 30,
                    y: 20
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -50,
                    y: 95
                },
                pivot: {
                    x: 75,
                    y: 21
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 43,
                    y: 110
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 40,
                    y: 255
                },
                pivot: {
                    x: 25,
                    y: 17
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -10,
                    y: 104
                },
                pivot: {
                    x: 42,
                    y: 18
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 19,
                    y: 110
                }
            }
        }]
    },
    {
        bodyUrl: T + "woman_right/body.png",
        bodyPosition: {
            x: 0,
            y: 8
        },
        bodyImgPosition: {
            x: 0,
            y: 73
        },
        headUrl: T + "woman_right/head.png",
        headPosition: {
            x: 0,
            y: -35
        },
        facingTo: 2,
        part: [
            [T + "woman_right/left_arm.png", T + "woman_right/left_hand.png"],
            [T + "woman_right/right_arm.png", T + "woman_right/right_hand.png"],
            [T + "woman_right/left_leg.png", T + "woman_right/left_foot.png"],
            [T + "woman_right/right_leg.png", T + "woman_right/right_foot.png"]
        ],
        globalPosition: {
            x: 250,
            y: 302
        },
        bones: [{
            boneRotate: 0,
            bone1: {
                position: {
                    x: 20,
                    y: 110
                },
                pivot: {
                    x: 30,
                    y: 18
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: 60,
                    y: 50
                },
                pivot: {
                    x: 10,
                    y: 10
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 16,
                    y: 39
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 17,
                    y: 110
                },
                pivot: {
                    x: 16,
                    y: 16
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: 20,
                    y: 70
                },
                pivot: {
                    x: 17,
                    y: 19
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 120,
                    y: 39
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 0,
                    y: 275
                },
                pivot: {
                    x: 20,
                    y: 10
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -15,
                    y: 110
                },
                pivot: {
                    x: 30,
                    y: 10
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 46,
                    y: 110
                }
            }
        }, {
            boneRotate: 0,
            bone1: {
                position: {
                    x: 40,
                    y: 270
                },
                pivot: {
                    x: 25,
                    y: 15
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: 15,
                    y: 100
                },
                pivot: {
                    x: 15,
                    y: 15
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 59,
                    y: 110
                }
            }
        }]
    },
    {
        bodyUrl: T + "woman/body.png",
        bodyPosition: {
            x: 142,
            y: 40
        },
        bodyImgPosition: {
            x: 0,
            y: 73
        },
        headUrl: T + "woman/head.png",
        headPosition: {
            x: 0,
            y: -30
        },
        facingTo: 1,
        part: [
            [T + "woman/left_arm.png", T + "woman/left_hand.png"],
            [T + "woman/right_arm.png", T + "woman/right_hand.png"],
            [T + "woman/left_leg.png", T + "woman/left_foot.png"],
            [T + "woman/right_leg.png", T + "woman/right_foot.png"]
        ],
        globalPosition: {
            x: 420,
            y: 250
        },
        bones: [{
            bone1: {
                position: {
                    x: 75,
                    y: 146
                },
                pivot: {
                    x: 82,
                    y: 15
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -4,
                    y: 57
                },
                pivot: {
                    x: 20,
                    y: 16
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 15,
                    y: 80
                }
            }
        }, {
            bone1: {
                position: {
                    x: 235,
                    y: 148
                },
                pivot: {
                    x: 13,
                    y: 15
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: 57,
                    y: 70
                },
                pivot: {
                    x: 16,
                    y: 18
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 93,
                    y: 80
                }
            }
        }, {
            bone1: {
                position: {
                    x: 153,
                    y: 290
                },
                pivot: {
                    x: 29,
                    y: 24
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -33,
                    y: 130
                },
                pivot: {
                    x: 50,
                    y: 15
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 41,
                    y: 112
                }
            }
        }, {
            bone1: {
                position: {
                    x: 215,
                    y: 290
                },
                pivot: {
                    x: 22,
                    y: 24
                },
                rotation: 0
            },
            bone2: {
                position: {
                    x: -33,
                    y: 130
                },
                pivot: {
                    x: 50,
                    y: 15
                },
                rotation: 0
            },
            end: {
                position: {
                    x: 41,
                    y: 112
                }
            }
        }]
    }
];

var womanCloths = [
    {
        clothUrl: T + "woman/cloth0/cloth.png",
        clothPosition: {
            x: 2,
            y: 105
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "woman/cloth0/left_leg.png", 0],
            [T + "woman/cloth0/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -10,
                        y: 0
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -10,
                        y: 0
                    }
                }
            }]
    },
    {
        clothUrl: T + "woman/cloth1/body.png",
        clothPosition: {
            x: -6,
            y: 100
        },
        part: [
            [T + "woman/cloth1/left_arm.png", 0],
            [T + "woman/cloth1/right_arm.png", 0],
            [T + "woman/cloth1/left_leg.png", 0],
            [T + "woman/cloth1/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 18,
                    y: -6
                }
            }
        }, {
            bone1: {
                position: {
                    x: -4,
                    y: -5
                }
            }
        }, {
            bone1: {
                position: {
                    x: -14,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -13,
                    y: 0
                }
            }
        }]
    },
    {
        clothUrl: T + "woman/cloth2/body.png",
        clothPosition: {
            x: -20,
            y: 105
        },
        part: [
            [T + "woman/cloth2/left_arm.png", 0],
            [T + "woman/cloth2/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 20,
                    y: -5
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, 0, 0]
    },
    {
        clothUrl: T + "woman/cloth3/body.png",
        clothPosition: {
            x: -20,
            y: 102
        },
        part: [
            [T + "woman/cloth3/left_arm.png", 0],
            [T + "woman/cloth3/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 3,
                    y: -5
                }
            }
        }, {
            bone1: {
                position: {
                    x: -8,
                    y: -8
                }
            }
        }, 0, 0]
    },
    {
        clothUrl: T + "woman/cloth4/cloth.png",
        clothPosition: {
            x:-7,
            y: 100
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman/cloth5/body.png",
        clothPosition: {
            x: -34,
            y: 102
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman/cloth6/body.png",
        clothPosition: {
            x: -14,
            y: 104
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman/cloth7/body.png",
        clothPosition: {
            x: -20,
            y: 105
        },
        part: [
            [T + "woman/cloth7/left_arm.png", 0],
            [T + "woman/cloth7/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 20,
                    y: 1
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, 0, 0]
    }
];

var womanBackCloths = [
    {
        clothUrl: T + "woman_back/cloth0/cloth.png",
        clothPosition: {
            x: 2,
            y: 105
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "woman_back/cloth0/left_leg.png", 0],
            [T + "woman_back/cloth0/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -10,
                        y: 0
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -10,
                        y: 0
                    }
                }
            }]
    },
    {
        clothUrl: T + "woman_back/cloth1/body.png",
        clothPosition: {
            x: -8,
            y: 100
        },
        part: [
            [T + "woman_back/cloth1/left_arm.png", 0],
            [T + "woman_back/cloth1/right_arm.png", 0],
            [T + "woman_back/cloth1/left_leg.png", 0],
            [T + "woman_back/cloth1/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 5,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: 0,
                    y: -2
                }
            }
        }, {
            bone1: {
                position: {
                    x: -18,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -13,
                    y: 0
                }
            }
        }]
    },
    {
        clothUrl: T + "woman_back/cloth2/body.png",
        clothPosition: {
            x: -20,
            y: 105
        },
        part: [
            [T + "woman_back/cloth2/left_arm.png", 0],
            [T + "woman_back/cloth2/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [
            {
                bone1: {
                    position: {
                        x: 10,
                        y: 0
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -3,
                        y: -2
                    }
                }
            }, 0, 0]
    },
    {
        clothUrl: T + "woman_back/cloth3/body.png",
        clothPosition: {
            x: -18,
            y: 103
        },
        part: [
            [T + "woman_back/cloth3/left_arm.png", 0],
            [T + "woman_back/cloth3/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [
            {
                bone1: {
                    position: {
                        x: -2,
                        y: -2
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: -3,
                        y: -2
                    }
                }
            }, 0, 0]
    },
    {
        clothUrl: T + "woman_back/cloth4/cloth.png",
        clothPosition: {
            x: -7,
            y: 100
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman_back/cloth5/body.png",
        clothPosition: {
            x: -35,
            y: 102
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman_back/cloth6/body.png",
        clothPosition: {
            x: -14,
            y: 102
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman_back/cloth7/body.png",
        clothPosition: {
            x: -20,
            y: 100
        },
        part: [
            [T + "woman_back/cloth7/left_arm.png", 0],
            [T + "woman_back/cloth7/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 16,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -2
                }
            }
        }, 0, 0]
    }
];

var womanRightCloths = [
    {
        clothUrl: T + "woman_right/cloth0/body.png",
        clothPosition: {
            x: 0,
            y: 96
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "woman_right/cloth0/left_leg.png", 0],
            [T + "woman_right/cloth0/right_leg.png", 0]
        ],
        bones: [0, 0, {
            bone1: {
                position: {
                    x: -8,
                    y: -6
                }
            }
        }, {
            bone1: {
                position: {
                    x: 1,
                    y: -6
                }
            }
        }]
    },
    {
        clothUrl: T + "woman_right/cloth1/body.png",
        clothPosition: {
            x: -4,
            y: 98
        },
        part: [
            [T + "woman_right/cloth1/left_arm.png", 0],
            [T + "woman_right/cloth1/right_arm.png", 0],
            [T + "woman_right/cloth1/left_leg.png", 0],
            [T + "woman_right/cloth1/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 2,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: 0,
                    y: -4
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: -1
                }
            }
        }, {
            bone1: {
                position: {
                    x: -8,
                    y: -0
                }
            }
        }]
    },
    {
        clothUrl: T + "woman_right/cloth2/body.png",
        clothPosition: {
            x: -28,
            y: 87
        },
        part: [
            [T + "woman_right/cloth2/left_arm.png", 0],
            [T + "woman_right/cloth2/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -2,
                    y: -5
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -3
                }
            }
        }, 0, 0]
    },
    {
        clothUrl: T + "woman_right/cloth3/body.png",
        clothPosition: {
            x: -20,
            y: 87
        },
        part: [
            [T + "woman_right/cloth3/left_arm.png", 0],
            [T + "woman_right/cloth3/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -2,
                    y: -5
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -3
                }
            }
        }, 0, 0]
    },
    {
        clothUrl: T + "woman_right/cloth4/body.png",
        clothPosition: {
            x: -12,
            y: 91
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman_right/cloth5/body.png",
        clothPosition: {
            x: -34,
            y: 86
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman_right/cloth6/body.png",
        clothPosition: {
            x: -15,
            y: 91
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman_right/cloth7/body.png",
        clothPosition: {
            x: -20,
            y: 87
        },
        part: [
            [T + "woman_right/cloth7/left_arm.png", 0],
            [T + "woman_right/cloth7/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -2,
                    y: -5
                }
            }
        }, {
            bone1: {
                position: {
                    x: -3,
                    y: -3
                }
            }
        }, 0, 0]
    }
];

var womanLeftCloths = [
    {
        clothUrl: T + "woman_left/cloth0/cloth.png",
        clothPosition: {
            x: 0,
            y: 96
        },
        part: [
            [0, 0],
            [0, 0],
            [T + "woman_left/cloth0/left_leg.png", 0],
            [T + "woman_left/cloth0/right_leg.png", 0]
        ],
        bones: [0, 0,
            {
                bone1: {
                    position: {
                        x: -10,
                        y: 1
                    }
                }
            }, {
                bone1: {
                    position: {
                        x: 0,
                        y: 7
                    }
                }
            }]
    },
    {
        clothUrl: T + "woman_left/cloth1/body.png",
        clothPosition: {
            x: -5,
            y: 99
        },
        part: [
            [T + "woman_left/cloth1/left_arm.png", 0],
            [T + "woman_left/cloth1/right_arm.png", 0],
            [T + "woman_left/cloth1/left_leg.png", 0],
            [T + "woman_left/cloth1/right_leg.png", 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 4,
                    y: 0
                }
            }
        }, {
            bone1: {
                position: {
                    x: 5,
                    y: 5
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: 14
                }
            }
        }, {
            bone1: {
                position: {
                    x: -10,
                    y: 12
                }
            }
        }]
    },
    {
        clothUrl: T + "woman_left/cloth2/body.png",
        clothPosition: {
            x: -25,
            y: 87
        },
        part: [
            [T + "woman_left/cloth2/left_arm.png", 0],
            [T + "woman_left/cloth2/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 3,
                    y: -3
                }
            }
        }, {
            bone1: {
                position: {
                    x: 5,
                    y: 0
                }
            }
        }, 0, 0]
    },
    {
        clothUrl: T + "woman_left/cloth3/body.png",
        clothPosition: {
            x: -20,
            y: 87
        },
        part: [
            [T + "woman_left/cloth3/left_arm.png", 0],
            [T + "woman_left/cloth3/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: -3,
                    y: -3
                }
            }
        }, {
            bone1: {
                position: {
                    x: -5,
                    y: -5
                }
            }
        }, 0, 0]
    },
    {
        clothUrl: T + "woman_left/cloth4/body.png",
        clothPosition: {
            x: -7,
            y: 93
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman_left/cloth5/body.png",
        clothPosition: {
            x: -33,
            y: 102
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman_left/cloth6/body.png",
        clothPosition: {
            x: -20,
            y: 102
        },
        part: [
            [0, 0],
            [0, 0],
            [0, 0],
            [0, 0]
        ]
    },
    {
        clothUrl: T + "woman_left/cloth7/body.png",
        clothPosition: {
            x: -21,
            y: 88
        },
        part: [
            [T + "woman_left/cloth7/left_arm.png", 0],
            [T + "woman_left/cloth7/right_arm.png", 0],
            [0, 0],
            [0, 0]
        ],
        bones: [{
            bone1: {
                position: {
                    x: 3,
                    y: -1
                }
            }
        }, {
            bone1: {
                position: {
                    x: 7,
                    y: -1
                }
            }
        }, 0, 0]
    }
];

var manFace = [
    {
        position: {
            x: 24,
            y: 52
        }
    }, {
        position: {
            x: 23,
            y: -16
        }
    }, {
        position: {
            x: 24,
            y: 35
        }
    },
    {
        position: {
            x: 23,
            y: 52
        }
    }, {
        position: {
            x: 26,
            y: 48
        }
    }, {
        position: {
            x: 24,
            y: 46
        }
    }
];
for (var eo = 0; eo < 6; eo++) manFace[eo].url = T + "man/face" + (eo + 1) + ".png";

var manHair = [
    {
        position: {
            x: 6,
            y: -13
        }
    }, {
        position: {
            x: -6,
            y: -33
        }
    }, {
        position: {
            x: 0,
            y: -30
        }
    }, {
        position: {
            x: 8,
            y: -20
        }
    }, {
        position: {
            x: 11,
            y: -15
        }
    }
];
for (var eo = 0; eo < 5; eo++) manHair[eo].url = T + "man/hair" + (eo + 1) + ".png";

var manBackFace = [];
var manBackHair = [
    {
        position: {
            x: 2,
            y: -10
        }
    }, {
        position: {
            x: -6,
            y: -30
        }
    }, {
        position: {
            x: -8,
            y: -16
        }
    }, {
        position: {
            x: 6,
            y: -16
        }
    }, {
        position: {
            x: 8,
            y: -4
        }
    }
];
for (var eo = 0; eo < 5; eo++) manBackHair[eo].url = T + "man_back/hair" + (eo + 1) + ".png", manBackFace.push(false);


var manRightFace = [
    {
        position: {
            x: 46,
            y: 41
        }
    }, {
        position: {
            x: -25,
            y: -24
        }
    }, {
        position: {
            x: 39,
            y: 14
        }
    },
    {
        position: {
            x: 33,
            y: 41
        }
    }, {
        position: {
            x: 35,
            y: 38
        }
    }, {
        position: {
            x: 38,
            y: 36
        }
    }
];
for (var eo = 0; eo < 6; eo++) manRightFace[eo].url = T + "man_right/face" + (eo + 1) + ".png";


var manRightHair = [
    {
        position: {
            x: -8,
            y: -9
        }
    }, {
        position: {
            x: -20,
            y: -30
        }
    }, {
        position: {
            x: -14,
            y: -34
        }
    }, {
        position: {
            x: -14,
            y: -13
        }
    }, {
        position: {
            x: -10,
            y: -11
        }
    }
];
for (var eo = 0; eo < 5; eo++) manRightHair[eo].url = T + "man_right/hair" + (eo + 1) + ".png";

var manLeftFace = [
    {
        position: {
            x: 10,
            y: 41
        }
    }, {
        position: {
            x: 10,
            y: -24
        }
    }, {
        position: {
            x: 11,
            y: 18
        }
    },
    {
        position: {
            x: 8,
            y: 41
        }
    }, {
        position: {
            x: 8,
            y: 34
        }
    }, {
        position: {
            x: 11,
            y: 38
        }
    }
];
for (var eo = 0; eo < 6; eo++) manLeftFace[eo].url = T + "man_left/face" + (eo + 1) + ".png";

var manLeftHair = [
    {
        position: {
            x: 0,
            y: -12
        }
    }, {
        position: {
            x: 6,
            y: -30
        }
    }, {
        position: {
            x: -4,
            y: -34
        }
    }, {
        position: {
            x: 8,
            y: -13
        }
    }, {
        position: {
            x: 6,
            y: -8
        }
    }
];
for (var eo = 0; eo < 5; eo++) manLeftHair[eo].url = T + "man_left/hair" + (eo + 1) + ".png";

var womanFace = [
    {
        position: {
            x: 17,
            y: 46
        }
    }, {
        position: {
            x: 16,
            y: 3
        }
    }, {
        position: {
            x: 16,
            y: 20
        }
    },
    {
        position: {
            x: 16,
            y: 44
        }
    }, {
        position: {
            x: 17,
            y: 44
        }
    }, {
        position: {
            x: 16,
            y: 44
        }
    }
];
for (var eo = 0; eo < 6; eo++) womanFace[eo].url = T + "woman/face" + (eo + 1) + ".png";

var womanHair = [
    {
        position: {
            x: -12,
            y: -8
        }
    }, {
        position: {
            x: 5,
            y: -22
        }
    }, {
        position: {
            x: -9,
            y: -20
        }
    }, {
        position: {
            x: -24,
            y: -14
        }
    }, {
        position: {
            x: -15,
            y: -14
        }
    }
];
for (var eo = 0; eo < 5; eo++) womanHair[eo].url = T + "woman/hair" + (eo + 1) + ".png";

var womanBackFace = [];
var womanBackHair = [
    {
        position: {
            x: -10,
            y: -8
        }
    }, {
        position: {
            x: 8,
            y: -25
        }
    }, {
        position: {
            x: 2,
            y: -5
        }
    }, {
        position: {
            x: -13,
            y: -8
        }
    }, {
        position: {
            x: -5,
            y: -10
        }
    }
];
for (var eo = 0; eo < 5; eo++) womanBackHair[eo].url = T + "woman_back/hair" + (eo + 1) + ".png", womanBackFace.push(false);


var womanRightFace = [
    {
        position: {
            x: 48,
            y: 38
        }
    }, {
        position: {
            x: 30,
            y: 10
        }
    }, {
        position: {
            x: 43,
            y: 39
        }
    }, {
        position: {
            x: 40,
            y: 38
        }
    }, {
        position: {
            x: 44,
            y: 29
        }
    }, {
        position: {
            x: 43,
            y: 39
        }
    }
];
for (var eo = 0; eo < 6; eo++) womanRightFace[eo].url = T + "woman_right/face" + (eo + 1) + ".png";

var womanRightHair = [
    {
        position: {
            x: -24,
            y: -8
        }
    }, {
        position: {
            x: -14,
            y: -5
        }
    }, {
        position: {
            x: -5,
            y: -8
        }
    }, {
        position: {
            x: -35,
            y: -10
        }
    }, {
        position: {
            x: -15,
            y: -8
        }
    }
];
for (var eo = 0; eo < 5; eo++) womanRightHair[eo].url = T + "woman_right/hair" + (eo + 1) + ".png";

var womanLeftFace = [
    {
        position: {
            x: 5,
            y: 41
        }
    }, {
        position: {
            x: 10,
            y: 0
        }
    }, {
        position: {
            x: 10,
            y: 39
        }
    }, {
        position: {
            x: 15,
            y: 32
        }
    }, {
        position: {
            x: 10,
            y: 30
        }
    }, {
        position: {
            x: 3,
            y: 40
        }
    }
];
for (var eo = 0; eo < 6; eo++) womanLeftFace[eo].url = T + "woman_left/face" + (eo + 1) + ".png";

var womanLeftHair = [
    {
        position: {
            x: 3,
            y: -8
        }
    }, {
        position: {
            x: 10,
            y: -10
        }
    }, {
        position: {
            x: 15,
            y: -8
        }
    }, {
        position: {
            x: 7,
            y: -15
        }
    }, {
        position: {
            x: 10,
            y: -8
        }
    }
];
for (var eo = 0; eo < 5; eo++) womanLeftHair[eo].url = T + "woman_left/hair" + (eo + 1) + ".png";
