$(document).ready(function(){
    // generer le mdp
 $('#genererPassword').on('click',function(){
     let mdp ='lemdpestici';
     $('#password,#password2').val(mdp);
    });
    // voir le mdp
    $('button[name="voirPassword"').on('click',function(){
        if($('#password,#password2').val()!=''){
            $('#password,#password2').attr('type','text');
        }else{
            $('#password,#password2').attr('type','password');
        }
    });
    // Activer bouton submit
    $('#submit').on('mouseover',function(e){
        e.preventDefault();
        if((verifValid())){
            $('#submit').removeAttr('disabled');
        }else{
            $('#submit').attr('disabled','disabled');
        }
  
    // Fonction pour vérifier que les champs du form inscription ne sont pas vides
    function verifValid(){
        let valeur = false;
        if($('#email').val()!=''&& $('#password')!=''&& $('#password2')!=''){
             valeur = true;
        }else{
            valeur = false;
        }
        return valeur
    }});
    // Afficher dans la div apercu_couleur la couleur choisie.
    $('#couleur').on('click',function(){
        $('#couleur').append($('.apercu_couleur')).css('width:100px','height:100px');
    });
    // Requete ajax
    $('#submit').on('click',function(dis){
        dis.preventDefault();
        let formData = new FormData($('inscription')[0]);
        $.ajax({
            url : 'ajax.php',
            type : 'POST',
            data: formData,
            processData : false,
            contentType : false,
            // Si bon =>
            success :function(response){
                $('.message').html('Inscription OK'+response).css('background-color','green').show()
            },
            // Si mauvais =>
            error:function(error){
                $('.message').html('ERREUR'+error).css('bakcground-color','red').show();
            },
        });
    })
    // Mettre le mail et password dans le form login
    $('#email').keyup(function(){
        $('#email_login').val($('#email').val())
    });
    $('#genererPassword').on('click',function(){
        $('#password_login').val($('#password').val())
    })
    copie();
    // Dropable jquery ui
    $( function() {
        $( "#draggable" ).draggable();
        $( "#droppable" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
        });
      });
    // Objet constructeur en commentaire, 
//     let Personne (email,password,password2,couleur)={
//         this.email = email;
//         this.password = password;
//         this.password2 = password2;
//         this.couleur = couleur;
//     }
});
