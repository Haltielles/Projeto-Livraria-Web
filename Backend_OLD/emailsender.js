exports.emailSender = function emailSender(app, nodemailer) {
    //buscar dados author por id
    app.route('/api/livraria/sendemail/:email,:login,:idcompra,:valortotal').get((req, res) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'haltiellestil@gmail.com',
                pass: 'colocar email aqui'
            }
        });
        var mailOptions = {
            from: 'haltiellestil@gmail.com',
            to: req.params.email,
            subject: 'Compra Loja de Livros PFL',
            text: 'Parabéns ' + req.params.login + ', seu pedidot de nº: ' + req.params.idcompra + ' no valor de R$ ' + req.params.valortotal + ' já foi processado, e logo será encaminhado para seu endereço.'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send({ success: false, message: 'erro ao enviar o email' });
            } else {
                console.log('Email sent: ' + info.response);
                res.send({ success: true, message: 'email enviado com sucesso' });
            }
        });      
    });
}