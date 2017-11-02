<template>
  <div class="login"  @keyup.enter="login">
        <div class="login-user">
            测试账号:biubiu&nbsp;&nbsp;&nbsp;密码:123456
        </div>
        <form novalidate @submit.stop.prevent="submit">
       <div class="admin_icon">
          <img src="../../../static/img/admin.jpg" />
       </div>
        <md-input-container>
            <label>账号</label>
            <md-input type="text" v-model="form.name"></md-input>
        </md-input-container>

        <md-input-container md-has-password>
            <label>密码</label>
            <md-input type="password" v-model="form.pass" ></md-input>
        </md-input-container>
       <md-button class="md-raised md-accent" @click="login">登录</md-button>
       <md-button class="md-raised md-accent">注册</md-button>
        </form> 
        <md-dialog-alert
		  :md-content="alert.content"
		  :md-ok-text="alert.ok"
		  @open="onOpen"
		  @close="onClose"
		  ref="check">
		</md-dialog-alert>
        <div class="loading" v-if="loading">
            <div class="loading_bg"></div>
            <md-spinner :md-size="80" md-indeterminate class="md-accent" md-theme="whiteForm"></md-spinner>
        </div>
  </div>
</template>
<script>
    export default{
        data () {
            return {
                loading : false,
                form :{
                    name :"",
                    pass :""
                },
                alert:{
				content:' ',
				ok:'返回'
			},
            }
        },
        methods :{
            login(){ 
                this.loading = true;
                setTimeout(()=>{
                    if(this.form.name == "biubiu" && this.form.pass == "123456"){
                        sessionStorage.setItem('user',JSON.stringify(this.form));
                        this.$router.push({name :'movie'})
                    }else{
                        this.openDialog('check');
                        this.alert.content = "账号密码不对，请重新输入！"
                    }
                     this.loading = false;
                },2000)
               
            },
             onOpen() {
                 console.log('Opened');
            },
            onClose(type) {
                console.log('Closed', type);
            },
            openDialog(ref) {
                 this.$refs[ref].open();
            },
        }
    }
</script>
<style>
.admin_icon{
    width:120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin:20px auto;
}
    .login-user{
        width:100%;
        height: 50px;
        background-color:#fff;
        position: fixed;
        top:0;
        left:0;
        line-height: 50px;
        opacity: .8;
        animation: loginUser 5s ease forwards;
        z-index: 2;
    }
    @keyframes loginUser {
        0%   {top:-50px;}
        30%  {top : 0;}
        70%  {top : 0;}
        100% {top:-50px}
    }
    .login{
        width:100%;
        height:100%;
        background-size: cover;
        background:url(../../../static/img/bg.jpeg);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .login form {
        width:70%;
    }
    .login-icon{
        min-width: 120px;
        min-height: 120px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .loading{
        position: fixed;
        top:50%;
        left:50%;
        margin-left:-40px;
        margin-top:-40px;
    }
    .loading_bg{
        background-color:#fff;
        opacity: .4;
        width:100%;
        height:100%;
        position: fixed;
        top:0;
        left:0;
    }
</style>

