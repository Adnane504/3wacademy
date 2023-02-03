$(document).ready(function(){

    $('form').submit(function(e){  
      e.preventDefault();
      let UserMsg = $('input').val(); 
      if( UserMsg !== '' )  
      {
        let NewMessage = "<p><strong><span class='text-primary'> User:</span> </strong> " + UserMsg + "</p>"; 

        CallBack_Botreply( UserMsg , NewMessage  ,Botreply );

        $('input').val("");
      } 
      else { alert("Vous n'avez pas envoyer de message");}  

      function CallBack_Botreply(r,n, callback) {

        $('.Robotchat').append(n);
        setTimeout (function(){ callback(r);} ,1500 ) ;
        }

      function Botreply(r) { 

          

            if(r=="Salut"){
                $('.Robotchat').append("<p> <strong><span class='text-danger'> ChatBot :</span> </strong>  Salut, comment allez-vous?</p>"); 
            } 
            else if(r=="Très bien merci et vous ?"){
                $('.Robotchat').append("<p> <strong><span class='text-danger'>ChatBot : </strong>  Super :)  </p>");
            }  
            else if(r=="Quoi de neuf"){ 
                 $('.Robotchat').append("<p> <strong><span class='text-danger'>ChatBot : </strong> J'apprends à coder en utilisant Jquery </p>");}
            else if(r=="C'est bien, continue!") { 
                  $('.Robotchat').append("<p> <strong><span class='text-danger'>ChatBot : </strong> Merci</p>");}
            else if(r=="J'ai faim"){ 
                $('.Robotchat').append("<p> <strong><span class='text-danger'>ChatBot : </strong>Moi aussi </p>");}
            else if(r=="Bonne soirée"){
             $('.Robotchat').append("<p> <strong><span class='text-danger'>ChatBot : </strong> A bientôt</p>");}

            else { $('.Robotchat').append("<p> <strong><span class='text-danger'>ChatBot : </strong> Pardon ? </p>");
        }
    }
    });
  });
