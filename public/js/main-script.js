$(function() {
    const $btn = {
        login: $('#btn-login'),
        logout: $('#btn-logout'),
        regist: $('#btn-regist'),
        myinfo: $('#btn-myinfo'),
        loginUser: $('#btn-login-user')
    }

    const $modalLogin = {
        body: $('#modal-login'),
        id: $('#id-login'),
        pwd: $('#pwd-login'),
        reserveLogin : $('#reserve-login')
    }

    const handler = {
        loginClick(e) {
            e.preventDefault();
            $modalLogin.body.modal('show');
        },
        logoutClick(e) {

        },
        registClick(e) {

        },
        myinfoClick(e) {

        },
        loginUserClick(e) {
            e.preventDefault();
            console.log($modalLogin.id.val(), $modalLogin.pwd.val(), $modalLogin.reserveLogin.checked);
        }
    }

    $btn.login.on({ 'click': handler.loginClick });
    $btn.logout.on({ 'click': handler.logoutClick });
    $btn.regist.on({ 'click': handler.registClick });
    $btn.myinfo.on({ 'click': handler.myinfoClick });

    $btn.loginUser.on({ 'click': handler.loginUserClick });
})



//ajax 요청
function getReviewPage(data) {
    return $.ajax({
        type: 'GET',
        url: `${location.host}/review`,
        dataType: '',
        data: data
    })
}

function getWritePage(data) {
    return $.ajax({
        type: 'GET',
        url: `${location.host}/write`,
        dataType: '',
        data: data
    })
}