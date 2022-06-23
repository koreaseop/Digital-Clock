$(function(){
    setInterval(function(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();    
    let day = d.getDay();
    let today = '';
        if(h < 10) {
            h = '0' + h;
        }
        if(m < 10) {
            m = '0' + m;
        }
        if(s < 10) {
            s = '0' + s;
        }

        $('.hour').html(h);
        $('.min').html(m);
        $('.sec').html(s);

        if(h>11){
            $('.ampm').html(`PM`);
        } else {
            $('.ampm').html(`AM`);
        }

        let year = d.getFullYear();
        let month = d.getMonth() +1;
        let date = d.getDate();
        

        $('.year').html(year);
        $('.month').html(month);
        $('.day').html(date);
    
        if(day === 1){
            today = ('MON');
          }
          if(day == 2){
              today = ('TUE');
          }
          if(day === 3){
              today = ('WED');
          }
          if(day == 4){
              today = ('THU');
          }
          if(day == 5){
              today = ('FRI');
          }
          if(day == 6){
              today = ('SAT');
          }
          if(day == 7){
              today = ('SUN');
          }
          $('.weekday').text(today);
    
    });
}, 1000);