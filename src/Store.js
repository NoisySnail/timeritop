import { BehaviorSubject } from "rxjs";

const timer = {
    currentTime: new BehaviorSubject(0),
    currentStatus: new BehaviorSubject(false),
 //   iWannaDie: new BehaviorSubject(true),
    time: 0,
    ongoing: false,
//    kostyl: true,
    name: "Start",

    yepCock(){
        timer.currentTime.next(++timer.time)
    },

    setTime(num){
        timer.time = num
    },

    reset(){
        timer.time = 0;
        timer.currentTime.next(timer.time)
        //timer.kostyl = !timer.kostyl
        //timer.iWannaDie.next(timer.kostyl)
    },

    switchup(){
        timer.ongoing = !timer.ongoing
        timer.name = timer.ongoing? "Stop" : "Start";
        timer.currentStatus.next(timer.ongoing)
    }

};

export default timer;