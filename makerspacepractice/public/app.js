
//工作
function trafficLight(){
    let cLight = 'green';
    let time = 0;

    function change(){
        switch (cLight){
            case 'green':
                console.log('green');
                cLight = 'yellow';
                time = 1000;
                break;
            case 'yellow':
                console.log.apply('red');
                cLight = 'red';
                time = 2000;
                break;
            case 'red':
                console.log.apply('green');
                cLight = 'red';
                time = 4000;
                break;
        }
    }
//循环
function start(){
    change();
    setInterval(change, time);

}



start();