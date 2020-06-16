function Walking() {
    OKarl2.style.display = "block", O_karl.className = "walkAnimation walk_0", F_addKeyListener(walkstyle1, walkstyle2, walkstyle2)
}

function Walking2() {
    OKarl2.style.display = "block", O_karl.style.backgroundImage = "url(" + newimages[3].src + ")", O_karl.className = "walkAnimation walk_0", F_addKeyListener(walkstyle1, walkstyle5, walkstyle5)
}

function changeCaodiLayer() {
    CaodiAndDadi.style.left = 50 * -walksteps + "px"
}

function positionHeadDiv() {
    HeadDiv.style.left = .5 * (Allcontainer.offsetWidth - HeadDiv.offsetWidth) + CaodiAndDadi.offsetLeft + "px"
}

function F_changeMountain() {
    O_shanAndbird.style.left = 20 * -walksteps + "px", O_farMountain1.style.left = 10 * -walksteps + "px", O_farerMountain1.style.left = 7 * -walksteps + "px"
}

function positionKarl() {
    OKarl2.style.left = "50%", OKarl2.style.bottom = "20%", OKarl2.style.marginBottom = "-10px"
}

function positionReset() {
    positionHeadDiv(), positionKarl()
}

function F_meet() {
    var e = F_Sbleft(O_karl);
    OC_seawoodboard.Onoff || e >= OC_seawoodboard.itsleft() + 20 && (F_removeKeyListener(walkstyle1, walkstyle2, walkstyle2), F_JumpInTheSea(), F_flyhelmet(), OC_seawoodboard.Onoff = !0)
}

function F_Sbleft(e) {
    return $(e).offset().left + $(e).width()
}





function mousedown() {
    console.log("您按下了页面！");
    //按下的一瞬间
    walksteps++;
    O_karl.className = "walkAnimation walk_" + walksteps % 4;
    clearInterval(timer2);
    hideKeynotice();
}
/*
var timeStart,timeEnd,time;
function getTimeNow()//获取此刻时间
             {
                var now=new Date();
                return now.getTime();
             }
function mousedown()//鼠标按下时触发
           {
                timeStart=getTimeNow();//获取鼠标按下时的时间
                time=setInterval(function()//setInterval会每100毫秒执行一次
                {
                    timeEnd=getTimeNow();//也就是每100毫秒获取一次时间
                    if(timeEnd-timeStart>10000)//如果此时检测到的时间与第一次获取的时间差有1000毫秒
                    {
                        clearInterval(time);//便不再继续重复此函数 （clearInterval取消周期性执行）
                    }else{
                        walksteps++;
                        O_karl.className = "walkAnimation walk_" + walksteps % 4;
                        clearInterval(timer2);
                        hideKeynotice();          
                        }
               },1000);
           }
*/

function walkstyle1(e) {
   "32" == e.keyCode && (walksteps++, O_karl.className = "walkAnimation walk_" + walksteps % 4, clearInterval(timer2), hideKeynotice()), e.preventDefault()
}

function walkstyle2(e) {
    e.wheelDelta && (onoff = e.wheelDelta < 0), e.detail && (onoff = e.detail > 0), onoff ? (walksteps++, O_karl.className = "walkAnimation walk_" + walksteps % 4, clearInterval(timer2), hideKeynotice()) : (walksteps = walksteps <= 0 ? walksteps = 0 : walksteps - 1, O_karl.className = "walkAnimation walk_" + walksteps % 4, clearInterval(timer2), hideKeynotice())
}

function walkstyle4(e) {
    e.wheelDelta && (onoff = e.wheelDelta < 0), e.detail && (onoff = e.detail > 0), onoff ? (walksteps++, F_meettheWall(O_steel, !1, 0), O_steel.Onoff || (clearInterval(OT_karlswimAnimation), $(O_karl).stop(), document.removeEventListener("keyup", F_floatdown), F_removeKeyListener(walkstyle3, walkstyle4, walkstyle4, function() {
        F_shuChangeback2()
    })), O_Sea.Onoff || ($(O_karl).stop().animate({
        bottom: "100"
    }, 2e3, "easeInCubic"), $("#bubles").stop().animate({
        "-24": "76"
    }, 2e3, "easeInCubic"), O_Sea.Onoff = !0)) : (F_meettheWall(O_CaodiAndDadi, !0, 0), walksteps <= 155 ? walksteps += 0 : (walksteps -= 1, O_Sea.Onoff && ($(O_karl).stop().animate({
        bottom: "0"
    }, 3e3, "easeInCubic"), $("#bubles").stop().animate({
        top: "76"
    }, 3e3, "easeInCubic"), O_Sea.Onoff = !1)))
}

function walkstyle3(e) {
    "32" == e.keyCode && (walksteps++, F_meettheWall(O_steel, !1, 0), O_steel.Onoff || (clearInterval(OT_karlswimAnimation), $(O_karl).stop(), O_steel.Onoff = !0, document.removeEventListener("keyup", F_floatdown), F_removeKeyListener(walkstyle3, walkstyle4, walkstyle4, function() {
        F_shuChangeback2()
    })), O_Sea.Onoff || ($(O_karl).stop().animate({
        bottom: "100"
    }, 2e3, "easeInCubic"), $("#bubles").stop().animate({
        top: "-24"
    }, 2e3, "easeInCubic"), O_Sea.Onoff = !0)), e.preventDefault()
}

function walkstyle5(e) {
    e.wheelDelta && (onoff = e.wheelDelta < 0), e.detail && (onoff = e.detail > 0), onoff ? (walksteps++, O_karl.className = "walkAnimation walk_" + walksteps % 4) : walksteps <= 255 ? walksteps += 0 : (walksteps -= 1, O_karl.className = "walkAnimation walk_" + walksteps % 4)
}

function F_floatwheswim() {
    document.addEventListener("keyup", F_floatdown)
}

function F_floatdown() {
    O_Sea.Onoff && ($(O_karl).stop().animate({
        bottom: "0"
    }, 3e3, "easeInCubic"), $("#bubles").stop().animate({
        top: "76"
    }, 3e3, "easeInCubic"), O_Sea.Onoff = !1)
}

function F_JumpInTheSea(e) {
    F_shuChangeback(), F_stationeryHide();
    var t = 0,
        a = setInterval(function() {
            t <= 5 && walksteps++, t >= 19 && clearInterval(a), O_karl.className = "swim_" + t, t++
        }, 30);
    e && e()
}

function F_shuChangeback() {
    positionKarl(), O_karl.style.maxWidth = "160px", O_karl.style.marginBottom = "-10px", O_karl.style.backgroundImage = "url(" + newimages[1].src + ")", O_karl.style.backgroundRepeat = "none-repeat", O_Sea.style.top = "90%", $(CaodiAndDadi).animate({
        top: "-75%"
    }, "slow", "easeOutExpo", function() {
        $("#bubles").addClass("ALLdisplayshow"), $(O_shanAndbird).addClass("displaynone"), $(O_karl).animate({
            marginBottom: 20
        }, "slow", "linear", function() {
            F_swimAnimation(), F_meet1.meet(), F_addKeyListener(walkstyle3, walkstyle4, walkstyle4, function() {
                F_floatwheswim()
            })
        })
    })
}

function F_swimAnimation() {
    var e = 0;
    O_karl.style.marginBottom = "40px", O_karl.style.marginLeft = "-67px", O_karl.style.backgroundImage = "url(" + newimages[2].src + ")", O_karl.className = "swim2_" + e, OT_karlswimAnimation = setInterval(function() {
        ++e >= 39 && (e = 0), O_karl.className = "swim2_" + e
    }, 50)
}

function F_addKeyListener(e, t, a, n) {
    document.addEventListener("keydown", e), document.addEventListener("mousewheel", t), document.addEventListener("DOMMouseScroll", a), n && n()
}

function F_removeKeyListener(e, t, a, n) {
    document.removeEventListener("keydown", e), document.removeEventListener("mousewheel", t), document.removeEventListener("DOMMouseScroll", a), n && n()
}

function F_meettheWall(e, t, a) {
    if (t) {
        var n = parseFloat($(O_karl).offset().left) + a;
        e.timer = setInterval(function() {
            n <= parseFloat($(e).offset().left) + parseFloat(e.offsetWidth) ? (e.Onoff = !1, clearInterval(e.timer)) : e.Onoff = !0
        }, 20)
    } else {
        n = parseFloat($(O_karl).offset().left) + parseFloat(O_karl.offsetWidth);
        e.timer = setInterval(function() {
            n >= parseFloat($(e).offset().left) + a ? (clearInterval(e.timer), e.Onoff = !1) : e.Onoff = !0
        }, 20)
    }
}

function swimTOwalk() {
    var e = 0;
    $(O_karl).animate({
        bottom: "0px"
    }, "fast", "easeInCirc");
    var t = setInterval(function() {
        if (e <= 10 && walksteps++, O_karl.src = "img/swimTOwalk/swimTOwalk_" + e + ".png", e >= 59) {
            clearInterval(t), Walking2(), F_meetsteelRight(), $("#smalldog").css({
                left: "0"
            }), F_meettheWall(O_rocket, !1, 180), F_meetsteelRight();
            var a = setInterval(function() {
                if (!O_rocket.Onoff) {
                    $(O_karl).animate({
                        bottom: "100px"
                    }, 100, "easeOutCirc"), O_karl.style.backgroundImage = "url(" + newimages[18].src + ")", clearInterval(a);
                    var e = 0,
                        t = setInterval(function() {
                            ++e <= 19 ? O_karl.className = "gotorocket gotorocket_" + e : (clearInterval(t), O_karl.className = "hide")
                        }, 30);
                    F_removeKeyListener(walkstyle1, walkstyle5, walkstyle5), O_rocketAudio.play(), F_displayWords(words[8]), setTimeout(function() {
                        F_rocketFly()
                    }, 7e3), O_rocket.Onoff = !0
                }
            }, 20)
        }
        e++
    }, 15)
}

function F_shuChangeback2() {
    positionKarl(), O_meetCar1.meet(), O_karl.style.maxWidth = "160px", O_karl.style.marginBottom = "0px", $("#bubles").removeClass("ALLdisplayshow").addClass("displaynone"), $(O_shanAndbird).addClass("ALLdisplayshow"), swimTOwalk(), $(CaodiAndDadi).animate({
        top: "0px"
    }, 500, "linear", function() {})
}

function F_crashActor(e, t, a) {
    this.object = document.getElementById(e), this.Onoff = !1, this.num = a, this.callback = t
}

function C_fish(e) {
    this.object = document.getElementsByClassName(e)
}

function C_actor(e, t, a, n, o, i, l) {
    this.Object = document.getElementById(e), this.Onoff = !1, this.classF = t, this.num = a, this.setTime = n, this.callback = o, this.backnumber = i, this.start = l
}

function Baiduyun_Ani() {
    F_removeKeyListener(walkstyle1, walkstyle5, walkstyle5), setTimeout(function() {
        F_addKeyListener(walkstyle1, walkstyle5, walkstyle5)
    }, 2e3), $("#Car1Img").animate({
        left: "100"
    }, 1e3, "linear", function() {
        $("#Fandou").css({
            transform: "rotate(-30deg)"
        }), $("#FandouTanhuang").css({
            transform: "rotate(60deg)"
        }), $("#Baiduyun").css({
            transform: "rotate(-90deg)"
        }).animate({
            bottom: 0,
            left: "-60"
        }, {
            duration: 500,
            queue: !1
        }, "linear"), $("#Baiduyun")
    }), $("#Baiduyun").animate({
        left: "48px"
    }, 1e3, "linear"), $(".Luntai").css({
        transform: "rotate(-360deg)"
    })
}

function BigCar_Ani() {
    F_removeKeyListener(walkstyle1, walkstyle5, walkstyle5), setTimeout(function() {
        F_addKeyListener(walkstyle1, walkstyle5, walkstyle5)
    }, 2e3), $("#BigCar").css({
        left: 0
    }), $(".Luntai2").css({
        transform: "rotate(-270deg)"
    })
}

function TV_show() {
    var e = document.getElementById("dpa4");
    setTimeout(function() {
        F_removeKeyListener(walkstyle1, walkstyle5, walkstyle5), $("#dpa1").hide(), $("#TVbtn2").css({
            transform: "rotate(30deg)"
        })
    }, 1e3), setTimeout(function() {
        $("#dpa2").hide(), $("#TVbtn2").css({
            transform: "rotate(60deg)"
        }), F_addKeyListener(walkstyle1, walkstyle5, walkstyle5)
    }, 2e3), setTimeout(function() {
        $("#dpa3").hide(), $("#TVbtn2").css({
            transform: "rotate(90deg)"
        })
    }, 3e3), setTimeout(function() {
        e.style.background = "url(./img/dataDEMO/construction/TVshow/jobs.gif) no-repeat", e.style.backgroundColor = "#fff", e.style.backgroundPositionX = "-40px"
    }, 3e3)
}

function F_rocketFly() {
    clearInterval(O_sky.timer), $("#fire1").animate({
        opacity: 1,
        top: 834
    }, 1e3, "linear", function() {}), $(".fireFlame").animate({
        opacity: 1,
        top: 820
    }, 1e3, "linear", function() {
        clearInterval(fire2.timer), clearInterval(fire3.timer), fire3.startAnimation(), fire2.startAnimation(), fire1.startAnimation()
    }), setTimeout(function() {
        $(".fireFlame").animate({
            opacity: 0
        }, 1e3, "linear", function() {
            clearInterval(fire2.timer), clearInterval(fire3.timer), $("#rocket2").animate({
                top: 1200
            }, 1e4, "easeInQuart")
        })
    }, 22e3), setTimeout(function() {
        $("#fire1").animate({
            opacity: 0,
            top: 700
        }, 1e3, "linear", function() {
            clearInterval(fire1.timer), $("#rocket1").animate({
                top: 1200
            }, 1e4, "easeInQuart"), $("#air-plane").css({
                transform: "rotate(75 deg)"
            })
        })
    }, 62e3), setTimeout(function() {
        O_sky.timer = setInterval(function() {
            n += 20, O_sky.style.top = O_sky.offsetTop + 20 + "px", O_skyAddon.style.top = O_skyAddon.offsetTop + 20 + "px", O_Sea.style.top = O_Sea.offsetTop + 20 + "px", O_DaF.style.top = O_DaF.offsetTop + 20 + "px", O_DaW.style.top = O_DaW.offsetTop + 20 + "px", O_brickWall.style.top = O_brickWall.offsetTop + 20 + "px", O_Tv.style.top = O_Tv.offsetTop + 20 + "px", Oimg_Tinny.style.display = "none", O_HotBalon.style.display = "none", $(O_rocket).offset().top - 104 <= $("#sky5").offset().top && (O_csky5.Onoff || ($("#sky5").vidbg({
                mp4: "https://dl3.pushbulletusercontent.com/R0CC9uXc0VmBJoKtCFHrVvTH6XJOVBEl/earth.mp4.mp4",
                webm: "./img/earth.webm"
            }, {
                muted: !0,
                loop: !0,
                overlay: !0
            }), O_csky5.Onoff = !0)), $("#sky5").offset().top + O_csky5.offsetHeight >= window.innerHeight && clearInterval(O_sky.timer)
        }, 20)
    }, 3e3)
}

function F_meettheAbout() {
    F_meettheWall(O_about, !1, -400);
    var e = setInterval(function() {
        O_about.Onoff || (clearInterval(e), clearInterval(O_about.timer), F_displayWords(words[1]), F_animateAbout(), F_meettheChengdu())
    }, 20)
}

function F_animateAbout() {
    $("#Code-mill").animate({
        bottom: "240px"
    }, 500, "easeOutElastic", function() {
        $("#Design-mill").animate({
            bottom: "120px"
        }, 500, "easeOutElastic", function() {
            $("#Animation-mill").animate({
                bottom: "240px"
            }, 500, "easeOutElastic", function() {
                $("#Exercise-mill").animate({
                    bottom: "370px"
                }, 500, "easeOutElastic").addClass("rotateMill4"), $("#mill-pole4").animate({
                    height: "470px"
                }, 500, "easeOutElastic")
            }).addClass("rotateMill3"), $("#mill-pole3").animate({
                height: "340px"
            }, 500, "easeOutElastic")
        }).addClass("rotateMill2"), $("#mill-pole2").animate({
            height: "220px"
        }, 500, "easeOutElastic")
    }).addClass("rotateMill1"), $("#mill-pole1").animate({
        height: "340px"
    }, 500, "easeOutElastic")
}

function F_meettheChengdu() {
    F_meettheWall(O_chengdu, !1, 400);
    var e = setInterval(function() {
        O_chengdu.Onoff || (clearInterval(e), clearInterval(O_about.timer), F_displayWords(words[2]), F_animateChengdu(), F_meettheSchool(), F_removeKeyListener(walkstyle1, walkstyle2, walkstyle2), setTimeout(function() {
            F_addKeyListener(walkstyle1, walkstyle2, walkstyle2)
        }, 2e3))
    }, 20)
}

function F_animateChengdu() {
    $("#frame").animate({
        bottom: "0"
    }, 1500, "easeOutBounce", function() {
        $("#panda").animate({
            bottom: "65px"
        }, 1e3, "easeOutBounce", function() {
            $("#hat").animate({
                bottom: "356px"
            }, 700, "easeOutBounce")
        })
    }), $("#bamboo").animate({
        opacity: 1
    }, 7e3, "linear"), $("#text").animate({
        opacity: 1
    }, 7e3, "linear")
}

function F_meettheSchool() {
    F_meettheWall(O_school, !1, 1080);
    var e = setInterval(function() {
        O_school.Onoff || (clearInterval(e), F_displayWords(words[3]), $("#stationery").show(), F_buildschool(), F_stationery(), F_animateBachelor(), F_removeKeyListener(walkstyle1, walkstyle2, walkstyle2), setTimeout(function() {
            F_addKeyListener(walkstyle1, walkstyle2, walkstyle2)
        }, 2e3))
    }, 20)
}

function F_buildschool() {
    $("#building-A").animate({
        opacity: "1"
    }, 1e3, "linear", function() {
        $("#building-B").animate({
            bottom: "0px"
        }, 150, "linear", function() {
            $("#building-C").animate({
                left: "97px"
            }, 150, "linear", function() {
                $("#building-D").animate({
                    bottom: "5px"
                }, 150, "linear", function() {
                    $("#building-E").animate({
                        left: "385px"
                    }, 150, "linear", function() {
                        $("#building-F").animate({
                            bottom: "0px"
                        }, 150, "linear", function() {
                            $("#building-Q").animate({
                                bottom: "347px"
                            }, 600, "easeOutBounce"), $("#building-R").animate({
                                left: "564px"
                            }, 150, "linear", function() {
                                $("#building-H").animate({
                                    bottom: "48px"
                                }, 150, "linear", function() {
                                    $("#building-I").animate({
                                        bottom: "316px"
                                    }, 150, "linear", function() {
                                        $("#building-J").animate({
                                            left: "625px"
                                        }, 150, "linear", function() {
                                            $("#building-K").animate({
                                                bottom: "160px"
                                            }, 150, "linear", function() {
                                                $("#building-L").animate({
                                                    bottom: "16px"
                                                }, 150, "linear", function() {
                                                    $("#building-M").animate({
                                                        left: "42px"
                                                    }, 150, "linear")
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }), $("#building-A2").animate({
        opacity: "1"
    }, 1e3, "linear", function() {
        $("#building-B2").animate({
            bottom: "0px"
        }, 150, "linear", function() {
            $("#building-C2").animate({
                left: "97px"
            }, 150, "linear", function() {
                $("#building-D2").animate({
                    bottom: "5px"
                }, 150, "linear", function() {
                    $("#building-E2").animate({
                        left: "385px"
                    }, 150, "linear", function() {
                        $("#building-F2").animate({
                            bottom: "0px"
                        }, 150, "linear", function() {
                            $("#building-Q2").animate({
                                bottom: "347px"
                            }, 600, "easeOutBounce"), $("#building-R2").animate({
                                left: "564px"
                            }, 150, "linear", function() {
                                $("#building-H2").animate({
                                    bottom: "48px"
                                }, 150, "linear", function() {
                                    $("#building-I2").animate({
                                        bottom: "316px"
                                    }, 150, "linear", function() {
                                        $("#building-J2").animate({
                                            left: "625px"
                                        }, 150, "linear", function() {
                                            $("#building-K2").animate({
                                                bottom: "160px"
                                            }, 150, "linear", function() {
                                                $("#building-L2").animate({
                                                    bottom: "16px"
                                                }, 150, "linear", function() {
                                                    $("#building-M2").animate({
                                                        left: "42px"
                                                    }, 150, "linear")
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

function F_stationery() {
    $("#book1").css({
        bottom: "-10%",
        transform: "rotate(45deg)"
    }), $("#book2").css({
        bottom: "-10%",
        transform: "rotate(-45deg)"
    }), $("#jiazi").css({
        left: "90%",
        transform: "rotate(45deg)"
    }), $("#knife").css({
        bottom: "0%",
        transform: "rotate(-45deg)"
    }), $("#magnify").css({
        bottom: "0%",
        transform: "rotate(-45deg)"
    }), $("#notebook").css({
        left: "0",
        transform: "rotate(45deg)"
    }), $("#ruler1").css({
        right: "0",
        transform: "rotate(45deg)"
    }), $("#ruler2").css({
        left: "-10%",
        transform: "rotate(80deg)"
    }), $("#timer").css({
        bottom: "0%",
        transform: "rotate(45deg)"
    }), $("#yuangui").css({
        right: "0",
        transform: "rotate(45deg)"
    }), $("#pencil").css({
        right: "0",
        transform: "rotate(-45deg)"
    }), $("#upan").css({
        left: "0",
        transform: "rotate(-45deg)"
    })
}

function F_stationeryHide() {
    $("#book1").css({
        bottom: "-80%",
        transform: "rotate(0)"
    }), $("#book2").css({
        bottom: "-80%",
        transform: "rotate(0)"
    }), $("#jiazi").css({
        left: "120%",
        transform: "rotate(0)"
    }), $("#knife").css({
        bottom: "-30%",
        transform: "rotate(0)"
    }), $("#magnify").css({
        bottom: "-30%",
        transform: "rotate(0)"
    }), $("#notebook").css({
        left: "-10%",
        transform: "rotate(0)"
    }), $("#ruler1").css({
        right: "-20%",
        transform: "rotate(0)"
    }), $("#ruler2").css({
        left: "-40%",
        transform: "rotate(0)"
    }), $("#timer").css({
        bottom: "-20%",
        transform: "rotate(0)"
    }), $("#yuangui").css({
        right: "-10%",
        transform: "rotate(0)"
    }), $("#pencil").css({
        right: "-10%",
        transform: "rotate(0)"
    }), $("#upan").css({
        left: "-10%",
        transform: "rotate(0)"
    }), setTimeout(function() {
        $("#stationery").hide()
    }, 100)
}

function F_animateBachelor() {
    $("#bachelor").animate({
        left: 75,
        top: 116,
        opacity: 1
    }, 1e3, "easeOutBounce"), $("#schoolhatimg").addClass("bachelorIMG"), setTimeout(function() {
        $("#bachelor").animate({
            top: 90
        }, 100, "easeOutBounce"), $("#SchoolHatImg").addClass("boomIMG").removeClass("bachelorIMG")
    }, 2400), setTimeout(function() {
        $("#bachelor").animate({
            top: 116
        }, 1e3, "easeOutBounce"), $("#SchoolHatImg").addClass("helmetIMG").removeClass("boomIMG")
    }, 2500)
}

function F_flyhelmet() {
    $("#bachelor").animate({
        left: 0,
        top: "-1300%",
        opacity: 0
    }, 2e3, "linear")
}

function F_displayWords(e) {
    clearInterval(wordTimer2), clearInterval(wordTimer), clearTimeout(wordTimeOut), $("#displayword").css({
        bottom: "-80%"
    }), iWord.innerHTML = "";
    var t = 0,
        a = e.length;
    wordTimer2 = setInterval(function() {
        "show" == O_Guangbiao.className ? O_Guangbiao.className = "hide" : O_Guangbiao.className = "show"
    }, 200), iWord.innerHTML = "", wordTimer = setInterval(function() {
        iWord.innerHTML += e.charAt(t), t++ === a && (clearInterval(wordTimer), wordTimeOut = setTimeout(function() {
            $("#displayword").css({
                bottom: "-100%"
            })
        }, 3e3))
    }, 100)
}

function F_meetsteelRight() {
    var e = parseFloat($(O_karl).offset().left);
    O_brickWall.timer = setInterval(function() {
        e <= parseFloat($(O_brickWall).offset().left) ? (O_brickWall.Onoff = !1, console.log("到了左边了"), clearInterval(O_brickWall.timer)) : O_brickWall.Onoff = !0
    }, 15)
}
var Allcontainer = document.getElementById("adventure"),
    HeadDiv = document.getElementById("Head"),
    OKarl2 = document.getElementById("Karl"),
    O_karl = document.getElementById("Karlvicent"),
    fallAnimation = document.getElementById("fallAnimation"),
    fallAnimationIMG = document.getElementById("fallAnimationIMG");
fallAnimationIMG.src = newimages[0].src;
var Keynotice = document.getElementById("keybord"),
    CaodiAndDadi = document.getElementById("layer-hen-3"),
    O_CaodiAndDadi = document.getElementById("layer-ludi-caodi-1"),
    O_shanAndbird = document.getElementById("layer-hen-2"),
    O_farMountain1 = document.getElementById("layer-hen-4"),
    O_farerMountain1 = document.getElementById("layer-hen-5"),
    OC_seawoodboard = new C_actor("woodbord2"),
    O_Sea = document.getElementById("layer-sea"),
    O_sky = document.getElementById("skyAnimation"),
    O_DaF = document.getElementById("dock-and-floor"),
    O_DaW = document.getElementById("dock-wood");
O_Sea.Onoff = !1;
var O_steel = document.getElementById("layer-dock"),
    O_rocketAudio = document.getElementById("rocketAudio");
O_steel.Onoff = !0;
var O_Baiduyun = document.getElementById("Baiduyun"),
    walksteps = 0,
    onoff = !1,
    OT_karlswimAnimation = null,
    O_rocket = document.getElementById("rocket"),
    O_skyAddon = document.getElementById("sky-addon"),
    O_csky5 = document.getElementById("sky5"),
    O_about = document.getElementById("About"),
    O_chengdu = document.getElementById("chengdu"),
    O_school = document.getElementById("school-Ob"),
    O_car1 = document.getElementById("Car1"),
    O_Guangbiao = document.getElementById("Guangbiao"),
    O_Tinnyplane = document.getElementById("Tinny-plane"),
    O_HotBalon = document.getElementById("HotBalon"),
    O_brickWall = document.getElementById("brickwall"),
    O_Tv = document.getElementById("bigTvArea"),
    words = ["大家好 欢迎来到我的个人简历!", "这是我的个人技能", '我来自"海滨邹鲁"——汕头', "我就读于佛山科学技术学院 🎓", "这是我的技能表💪", "目前我在学校的工作室里维护学校的网页站点💻", "这里是我的部分作品,鼠标滑到上面,点击查看📚", "注意看电视📺", "好了,准备好,我们要跳出地球了 ✈️"],
    wordTimeOut = null,
    wordTimer = null,
    wordTimer2 = null,
    iWord = document.getElementById("iWord");
O_about.Onoff = !0, O_csky5.Onoff = !1;
var n = 1;
window.onresize = positionReset, setInterval(function() {
    console.log(walksteps)
}, 100);
for (var Aimg = document.getElementsByClassName("forestIMG"), i = 0; i < Aimg.length; i++) Aimg[i].src = newimages[4].src;
var Oimg_dadi = document.getElementsByClassName("dadi")[0];
Oimg_dadi.style.backgroundImage = "url(" + newimages[5].src + ")";
var Oimg_cao = document.getElementsByClassName("cao")[0];
Oimg_cao.style.backgroundImage = "url(" + newimages[6].src + ")";
var Aimg_treeA = document.getElementsByClassName("tree-A");
for (i = 0; i < Aimg_treeA.length; i++) Aimg_treeA[i].style.backgroundImage = "url(" + newimages[7].src + ")";
var Aimg_treeB = document.getElementsByClassName("tree-B");
for (i = 0; i < Aimg_treeB.length; i++) Aimg_treeB[i].style.backgroundImage = "url(" + newimages[8].src + ")";
var Aimg_treeC = document.getElementsByClassName("tree-C");
for (i = 0; i < Aimg_treeC.length; i++) Aimg_treeC[i].style.backgroundImage = "url(" + newimages[9].src + ")";
var titleKarl = document.getElementById("title-karl");
titleKarl.style.backgroundImage = "url(" + newimages[10].src + ")";
var Oimg_farmount1 = document.getElementById("far-mountain-1");
Oimg_farmount1.src = newimages[11].src;
var Oimg_farmount2 = document.getElementById("far-mountain-2");
Oimg_farmount2.src = newimages[12].src;
var Oimg_Tinny = document.getElementById("Tinny-plane");
Oimg_Tinny.src = newimages[13].src;
var Oimg_HotBalon = document.getElementById("HotBalon");
Oimg_HotBalon.src = newimages[14].src;
var Oimg_farer1 = document.getElementById("farer-mountain1");
Oimg_farer1.src = newimages[15].src;
var Oimg_farer2 = document.getElementById("farer-mountain2");
Oimg_farer2.src = newimages[15].src;
var Oimg_wood = document.getElementById("woodbordIMG");
Oimg_wood.src = newimages[16].src;
var Oimg_plants = document.getElementById("plants"),
    Aimg_mill = Oimg_plants.getElementsByTagName("img");
for (i = 0; i < Aimg_mill.length; i++) Aimg_mill[i].style.backgroundImage = "url(" + newimages[17].src + ")";
O_Tinnyplane.style.left = "6100px", O_Tinnyplane.style.top = "1000px", O_HotBalon.style.left = "6100px", O_HotBalon.style.top = "1100px", positionReset(), F_meettheAbout();
var moveBackgroundTimer = setInterval(function() {
        changeCaodiLayer(), positionHeadDiv(), F_changeMountain(), F_meet()
    }, 10),
    Fish1 = new C_fish("Fish1"),
    Fish2 = new C_fish("Fish2"),
    Fish3 = new C_fish("Fish3"),
    F_meet1 = new F_crashActor("Web-Software", function() {
        Fish1.Animate(), F_displayWords(words[4]), F_meet2.meet()
    }),
    F_meet2 = new F_crashActor("Coding", function() {
        Fish2.Animate(), F_meet3.meet()
    }),
    F_meet3 = new F_crashActor("OtherCoding", function() {
        Fish3.Animate()
    });
F_crashActor.prototype.meet = function() {
    var e = this,
        t = 0;
    t = this.num ? this.num : 0, F_meettheWall(e.object, !1, t), e.timer = setInterval(function() {
        e.object.Onoff || (clearInterval(e.timer), e.callback && e.callback())
    }, 20)
}, C_fish.prototype.Animate = function() {
    var e = this,
        t = 0;
    e.timer = setInterval(function() {
        e.object[t].style.left = "0", ++t >= e.object.length && (clearInterval(e.timer), t = 0)
    }, 300)
}, C_actor.prototype.itsleft = function() {
    return $(this.Object).offset().left
}, C_actor.prototype.startAnimation = function() {
    var e = this.start,
        t = this;
    t.timer = setInterval(function() {
        e++, t.Object.className = t.classF + e, e >= t.num && (t.callback ? (clearInterval(t.timer), t.callback()) : e = t.start)
    }, t.setTime)
};
var O_meetCar1 = new F_crashActor("Car1", function() {
        Baiduyun_Ani(), F_displayWords(words[5]), O_meetBigCar.meet()
    }),
    O_meetBigCar = new F_crashActor("BigCarArea", function() {
        setTimeout(function() {
            BigCar_Ani(), F_displayWords(words[6])
        }, 1e3), O_meetTv.meet()
    }),
    O_meetTv = new F_crashActor("bigTvArea", function() {
        F_displayWords(words[7]), TV_show()
    }),
    fire1 = new C_actor("fire1", "fire1  fire1-", 27, 20, "", "", 0),
    fire2 = new C_actor("fire2", "fireFlame fire2-", 15, 120, function() {
        clearInterval(fire2.timer), fire2_2.startAnimation()
    }, "", 0),
    fire2_2 = new C_actor("fire2", "fireFlame fire2-", 27, 100, "", 15, 15),
    fire3 = new C_actor("fire3", "fireFlame fire2-", 15, 120, function() {
        clearInterval(fire3.timer), fire3_2.startAnimation()
    }, "", 0),
    fire3_2 = new C_actor("fire3", "fireFlame fire2-", 27, 100, "", 15, 15);
! function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    "use strict";

    function t(e) {
        var t, a, n, o, i, l, s, r = {};
        for (s = 0, l = (i = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(",")).length; s < l && (-1 === (a = i[s]).search(/^(http|https|ftp):\/\//) && -1 !== a.search(":")); s++) t = a.indexOf(":"), n = a.substring(0, t), (o = a.substring(t + 1)) || (o = void 0), "string" == typeof o && (o = "true" === o || "false" !== o && o), "string" == typeof o && (o = isNaN(o) ? o : +o), r[n] = o;
        return null == n && null == o ? e : r
    }

    function a(a, n, l) {
        this.$element = e(a), "string" == typeof n && (n = t(n)), l ? "string" == typeof l && (l = t(l)) : l = {}, this.settings = e.extend({}, o, l), this.path = n;
        try {
            this.init()
        } catch (e) {
            if (e.message !== i) throw e
        }
    }
    var n = "vidbg",
        o = {
            volume: 1,
            playbackRate: 1,
            muted: !0,
            loop: !0,
            autoplay: !0,
            position: "50% 50%",
            overlay: !1,
            resizing: !0
        },
        i = "Not implemented";
    a.prototype.init = function() {
        var t, a, n = this,
            o = n.path,
            l = o,
            s = "",
            r = n.$element,
            m = n.settings,
            c = function(e) {
                var t, a, n, o = (e = "" + e).split(/\s+/),
                    i = "50%",
                    l = "50%";
                for (n = 0, t = o.length; n < t; n++) "left" === (a = o[n]) ? i = "0%" : "right" === a ? i = "100%" : "top" === a ? l = "0%" : "bottom" === a ? l = "100%" : "center" === a ? 0 === n ? i = "50%" : l = "50%" : 0 === n ? i = a : l = a;
                return {
                    x: i,
                    y: l
                }
            }(m.position);
        a = n.$wrapper = e('<div class="vidbg-container">').css({
            position: "absolute",
            "z-index": -1,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": c.x + " " + c.y
        }), "object" == typeof o && (o.poster ? l = o.poster : o.mp4 ? l = o.mp4 : o.webm && (l = o.webm)), a.css("background-image", "url(" + l + ")"), "static" === r.css("position") && r.css("position", "relative"), r.css("z-index", "1"), r.is("body") && a.css({
            position: "fixed"
        }), r.prepend(a), "object" == typeof o ? (o.mp4 && (s += '<source src="' + o.mp4 + '" type="video/mp4">'), o.webm && (s += '<source src="' + o.webm + '" type="video/webm">'), t = n.$video = e("<video>" + s + "</video>")) : t = n.$video = e('<video><source src="' + o + '" type="video/mp4"><source src="' + o + '" type="video/webm"></video>');
        try {
            t.prop({
                autoplay: m.autoplay,
                loop: m.loop,
                volume: m.volume,
                muted: m.muted,
                defaultMuted: m.muted,
                playbackRate: m.playbackRate,
                defaultPlaybackRate: m.playbackRate
            })
        } catch (e) {
            throw new Error(i)
        }
        t.css({
            margin: "auto",
            position: "absolute",
            "z-index": -1,
            top: c.y,
            left: c.x,
            "-webkit-transform": "translate(-" + c.x + ", -" + c.y + ")",
            "-ms-transform": "translate(-" + c.x + ", -" + c.y + ")",
            "-moz-transform": "translate(-" + c.x + ", -" + c.y + ")",
            transform: "translate(-" + c.x + ", -" + c.y + ")",
            visibility: "hidden",
            opacity: 0
        }).one("canplaythrough.vidbg", function() {
            n.resize()
        }).one("playing.vidbg", function() {
            t.css({
                visibility: "visible",
                opacity: 1
            }), a.css("background-image", "none")
        }), r.on("resize.vidbg", function() {
            m.resizing && n.resize()
        }), a.append(t), m.overlay && e("<div class='vidbg-overlay' style='position:absolute;top:0;right:0;left:0;bottom:0;z-index:-1;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8cGF0aCBkPSJNMCA1TDUgMFpNNiA0TDQgNlpNLTEgMUwxIC0xWiIgc3Ryb2tlPSIjMjkyNzI3IiBzdHJva2Utd2lkdGg9IjMuMjUiIG9wYWNpdHk9Ii4yNSI+PC9wYXRoPgo8L3N2Zz4=);'></div>").insertAfter(e(".vidbg-container > video"))
    }, a.prototype.getVideoObject = function() {
        return this.$video[0]
    }, a.prototype.resize = function() {
        if (this.$video) {
            var e = this.$wrapper,
                t = this.$video,
                a = t[0],
                n = a.videoHeight,
                o = a.videoWidth,
                i = e.height(),
                l = e.width();
            l / o > i / n ? t.css({
                width: l + 2,
                height: "auto"
            }) : t.css({
                width: "auto",
                height: i + 2
            })
        }
    }, a.prototype.destroy = function() {
        delete e.vidbg.lookup[this.index], this.$video && this.$video.off(n), this.$element.off(n).removeData(n), this.$wrapper.remove()
    }, e.vidbg = {
        lookup: []
    }, e.fn.vidbg = function(t, o) {
        var i;
        return this.each(function() {
            (i = e.data(this, n)) && i.destroy(), (i = new a(this, t, o)).index = e.vidbg.lookup.push(i) - 1, e.data(this, n, i)
        }), this
    }, e(document).ready(function() {
        var t = e(window);
        t.on("resize.vidbg", function() {
            for (var t, a = e.vidbg.lookup.length, n = 0; n < a; n++)(t = e.vidbg.lookup[n]) && t.settings.resizing && t.resize()
        }), t.on("unload.vidbg", function() {
            return !1
        }), e(document).find("[data-vidbg-bg]").each(function(t, a) {
            var n = e(a),
                o = n.data("vidbg-options"),
                i = n.data("vidbg-bg");
            n.vidbg(i, o)
        })
    })
});