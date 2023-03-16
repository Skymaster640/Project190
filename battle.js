AFRAME.registerComponent("battle-test",{
    schema:{
        elementId: {type:"string",default:"#monster1"}
    },
    init:function(){
        var battlestatus = "selectdifficulty"
        var battledifficulty = "none"
        var hp = 120
        if(hp <= 0){
            this.gameover()
        }
        this.battlestart(hp,battlestatus,battledifficulty)
    },
    battlestart:function(health,status,difficulty){
        var camera = document.querySelector("#cameraView")
        var placeholdervariable = 1
        

        console.log("Battle has started!")
        var easydifficult = document.createElement("a-entity")
        easydifficult.setAttribute("id","easydifficultbutton")
        easydifficult.setAttribute("geometry",{primitive:"plane",height:"1",width:"2"})
        easydifficult.setAttribute("position","-3 -1 -2.5")
        easydifficult.setAttribute("src","./assets/BattleUIMain.png")
        easydifficult.setAttribute("material",{color:"cyan"})
        easydifficult.setAttribute("visible","true")

        var easydifficulttext = document.createElement("a-entity")
        easydifficulttext.setAttribute("id","easydifficulttext")
        easydifficulttext.setAttribute("position","-2.25 -0.9 -2.4")
        easydifficulttext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Press 1 for EASY Difficulty!")
        easydifficulttext.setAttribute("visible","true")
        

        var mediumdifficult = document.createElement("a-entity")
        mediumdifficult.setAttribute("id","easydifficultbutton")
        mediumdifficult.setAttribute("geometry",{primitive:"plane",height:"1",width:"2"})
        mediumdifficult.setAttribute("position","0 -1 -2.5")
        mediumdifficult.setAttribute("src","./assets/BattleUIMain.png")
        mediumdifficult.setAttribute("material",{color:"cyan"})
        mediumdifficult.setAttribute("visible","true")

        var mediumdifficulttext = document.createElement("a-entity")
        mediumdifficulttext.setAttribute("id","easydifficulttext")
        mediumdifficulttext.setAttribute("position","0.51 -0.9 -2.3")
        mediumdifficulttext.setAttribute("text","font: mozillavr; width:2.8; height: 3; value: Press 2 for MEDIUM Difficulty!")
        mediumdifficulttext.setAttribute("visible","true")


        var harddifficult = document.createElement("a-entity")
        harddifficult.setAttribute("id","easydifficultbutton")
        harddifficult.setAttribute("geometry",{primitive:"plane",height:"1",width:"2"})
        harddifficult.setAttribute("position","3 -1 -2.5")
        harddifficult.setAttribute("src","./assets/BattleUIMain.png")
        harddifficult.setAttribute("material",{color:"cyan"})
        harddifficult.setAttribute("visible","true")

        var harddifficulttext = document.createElement("a-entity")
        harddifficulttext.setAttribute("id","easydifficulttext")
        harddifficulttext.setAttribute("position","3.4 -0.9 -2.3")
        harddifficulttext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Press 3 for HARD Difficulty!")
        harddifficulttext.setAttribute("visible","true")


        camera.appendChild(easydifficult)
        camera.appendChild(mediumdifficult)
        camera.appendChild(harddifficult)
        camera.appendChild(easydifficulttext)
        camera.appendChild(mediumdifficulttext)
        camera.appendChild(harddifficulttext)

        window.addEventListener("keydown", (e)=> {
            if(e.key === "1" && status === "selectdifficulty") {
                difficulty = "Easy"
                status = "Difficultyselected"
                easydifficult.setAttribute("visible","false")
                easydifficulttext.setAttribute("visible","false")
                mediumdifficult.setAttribute("visible","false")
                mediumdifficulttext.setAttribute("visible","false")
                harddifficult.setAttribute("visible","false")
                harddifficulttext.setAttribute("visible","false")
                this.loadbattle(status,difficulty)
            }
        

        
            else if(e.key === "2" && status === "selectdifficulty") {
                difficulty = "Medium"
                status = "Difficultyselected"
                easydifficult.setAttribute("visible","false")
                easydifficulttext.setAttribute("visible","false")
                mediumdifficult.setAttribute("visible","false")
                mediumdifficulttext.setAttribute("visible","false")
                harddifficult.setAttribute("visible","false")
                harddifficulttext.setAttribute("visible","false")
                this.loadbattle(status,difficulty)
            }
        
            else if(e.key === "3" && status === "selectdifficulty") {
                difficulty = "Hard"
                status = "Difficultyselected"
                easydifficult.setAttribute("visible","false")
                easydifficulttext.setAttribute("visible","false")
                mediumdifficult.setAttribute("visible","false")
                mediumdifficulttext.setAttribute("visible","false")
                harddifficult.setAttribute("visible","false")
                harddifficulttext.setAttribute("visible","false")
                this.loadbattle(status,difficulty)
            }else{
                placeholdervariable = 2
            }
        });


    },
    loadbattle:function(currentstatus,selecteddifficulty){
        var camera = document.querySelector("#cameraView")
        var healthtext = document.querySelector("#health")
        if(selecteddifficulty==="Medium"){

        }else if(selecteddifficulty==="Hard"){

        }else{
            enemymodel = document.querySelector("#monster2")
            enemymodel.setAttribute("visible","true")
            var itemcount = 5
            currentstatus = "chooseaction"
            var healthtotal=120
            var maxhealth=120
            var enemyhealth=60
            var critchance=0
            var enemycritchance=0
            
            healthtext.setAttribute("text",{value: "HP: "+ healthtotal +"/"+maxhealth})

            var maintextbox = document.createElement("a-entity")
            maintextbox.setAttribute("id","dialoguebox")
            maintextbox.setAttribute("geometry",{primitive:"plane",height:"0.5",width:"4"})
            maintextbox.setAttribute("position","0 0 -2.3")
            maintextbox.setAttribute("material",{color:"cyan",opacity:"0.5",transparent:"true"})
            maintextbox.setAttribute("visible","true")

            var maintext = document.createElement("a-entity")
            maintext.setAttribute("id","battletext")
            maintext.setAttribute("position","0 0 -2.3")
            maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: The Goblin attacks!!!")
            maintext.setAttribute("visible","true")

            var fightbox = document.createElement("a-entity")
            fightbox.setAttribute("id","fightbutton")
            fightbox.setAttribute("geometry",{primitive:"plane",height:"0.5",width:"1"})
            fightbox.setAttribute("position","-1.5 -0.6 -2.3")
            fightbox.setAttribute("material",{color:"cyan",opacity:"0.5",transparent:"true"})
            fightbox.setAttribute("visible","true")

            var fighttext = document.createElement("a-entity")
            fighttext.setAttribute("id","fightbuttontext")
            fighttext.setAttribute("position","-0.3 -0.6 -2.3")
            fighttext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Fight (e)")
            fighttext.setAttribute("visible","true")

            var itembox = document.createElement("a-entity")
            itembox.setAttribute("id","itembutton")
            itembox.setAttribute("geometry",{primitive:"plane",height:"0.5",width:"1"})
            itembox.setAttribute("position","-1.5 -1.2 -2.3")
            itembox.setAttribute("material",{color:"cyan",opacity:"0.5",transparent:"true"})
            itembox.setAttribute("visible","true")

            var itemtext = document.createElement("a-entity")
            itemtext.setAttribute("id","itembuttontext")
            itemtext.setAttribute("position","-0.3 -1.2 -2.3")
            itemtext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Use Item (i)")
            itemtext.setAttribute("visible","true")

            console.log(currentstatus)

            camera.appendChild(maintextbox)
            camera.appendChild(maintext)
            camera.appendChild(fightbox)
            camera.appendChild(fighttext)
            camera.appendChild(itembox)
            camera.appendChild(itemtext)

            window.addEventListener("keydown", (e)=> {
                if(e.key === "e" && currentstatus === "chooseaction") {
                    currentstatus="attacked"
                    critchance = Math.random(0,20)
                    critchance = Math.round(critchance)
                    console.log(critchance)
                    if(critchance===1){
                        enemyhealth = enemyhealth - 20
                        maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Fiercely attacked the Goblin!")
                        console.log(enemyhealth)
                        fightbox.setAttribute("visible","false")
                        fighttext.setAttribute("visible","false")
                        itembox.setAttribute("visible","false")
                        itemtext.setAttribute("visible","false")
                        if(enemyhealth <= 0){
                            maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: You defeated the Goblin!!!")
                            enemymodel.setAttribute("visible","false")
                            currentstatus = "victory"
                            this.winbattle()
                        }
                    }else{
                        enemyhealth = enemyhealth - 10
                        maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Attacked the Goblin!")
                        console.log(enemyhealth)
                        fightbox.setAttribute("visible","false")
                        fighttext.setAttribute("visible","false")
                        itembox.setAttribute("visible","false")
                        itemtext.setAttribute("visible","false")

                        if(enemyhealth <= 0){
                            maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: You defeated the Goblin!!!")
                            enemymodel.setAttribute("visible","false")
                            currentstatus = "victory"
                            this.winbattle()
                        }
                    }
                    
                    console.log(currentstatus)
                }

                else if(e.key === "i" && currentstatus === "chooseaction" && itemcount > 0) {
                    currentstatus="itemuse"
                    maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Used Health Potion, regained 20 HP!")
                    healthtotal = healthtotal + 20
                    if(healthtotal > 120){
                        healthtotal = 120
                    }
                    healthtext.setAttribute("text",{value: "HP: "+ healthtotal +"/"+maxhealth})
                    itemcount= itemcount - 1
                    fightbox.setAttribute("visible","false")
                    fighttext.setAttribute("visible","false")
                    itembox.setAttribute("visible","false")
                    itemtext.setAttribute("visible","false")
                }

                else if(e.key === "i" && currentstatus === "chooseaction" && itemcount < 1) {
                    maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: Out of items!")
                }

                else if(e.key === "z" && currentstatus === "attacked" || e.key === "z" && currentstatus === "itemuse"){
                    currentstatus="gotattacked"
                    enemycritchance = Math.random(0,20)
                    enemycritchance = Math.round(enemycritchance)
                    console.log(enemycritchance)
                    if(enemycritchance===1){
                        healthtotal = healthtotal - 20
                        if(healthtotal <= 0){
                            maintextbox.setAttribute("visible","false")
                            maintext.setAttribute("visible","false")
                            this.gameover()
                        }
                        healthtext.setAttribute("text",{value: "HP: "+ healthtotal +"/"+maxhealth})
                        maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: The Goblin attacked you greatly!")

                    }else{
                        healthtotal = healthtotal - 10
                        if(healthtotal <= 0){
                            maintextbox.setAttribute("visible","false")
                            maintext.setAttribute("visible","false")
                            this.gameover()
                        }
                        healthtext.setAttribute("text",{value: "HP: "+ healthtotal +"/"+maxhealth})
                        maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: The Goblin attacked you!")

                    }
                    
                    console.log(currentstatus)
                }
                else if(e.key === "z" && currentstatus === "gotattacked"){
                    currentstatus = "chooseaction"
                    maintext.setAttribute("text","font: mozillavr; width:3; height: 3; value: The Goblin waits patiently...")
                    fightbox.setAttribute("visible","true")
                    fighttext.setAttribute("visible","true")
                    itembox.setAttribute("visible","true")
                    itemtext.setAttribute("visible","true")
                }



            })


        }

    },
    gameover:function(){
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
    },
    winbattle:function(){
        var element = document.querySelector("#wintext")
        element.setAttribute("visible",true)
    }
})