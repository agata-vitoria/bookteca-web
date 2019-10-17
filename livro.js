window.onload = () => {
  let elementoBotao = document.querySelector('#cadastrar')

  // elementoBotao.addEventListener('click', (event) => {
  //   event.preventDefault()
  //   let ladda = Ladda.create(elementoBotao)
  //   ladda.start()
  //   let progressoAtual = 0
  //   let interval =
  //   setInterval(() => {
  //     ladda.setProgress(progressoAtual += 0.1)
  //     if(progressoAtual >= 1) {
  //       clearInterval(interval)
  //       ladda.stop()
  //     }
  //   }, 1000)
  // })

  let formularioLivro = $('#formLivro')
  formularioLivro.validate({
    rules: {
      titulo: {
        required: true,
        minlength: 3
      },
      subtitulo: {
        required: false,
        minlength: 5
      },
      descricao: {
        required: true,
        minlength: 10
      }
    },
    messages: {
        titulo: {
          required: 'O título é obrigatório.',
        minlength: 'O título é muito curto.'
      },
      subtitulo: {
        minlength: 'O subtitulo é muito curto.'
      },
      descricao: {
        required: 'A descrição é obrigatória.',
        minlength: 'A descrição deve ter mais do que 10 caracteres.'
      }
    },
    errorPlacement: function(error, element) {
      element.parent().parent().find('.error').append(error).addClass('animated shake')
    },
    errorClass: 'cor-do-erro',
    submitHandler: function(form){
      console.log(form)
      let formSerializado = $(form).serialize()
      console.log(formSerializado)
      //JSON.stringify({nome: "ana", idade: 18})
      //nome=ana&idade=18
      //JSON.parse("nome=ana&idade=18")
      //{nome: "ana", idade: 18}

      fetch("http://localhost:8080/bookteca-api/src/inserirlivro.php", {
        method: "POST",
        body: formSerializado,
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        })
      })
    }
  })

}
