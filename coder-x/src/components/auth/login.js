import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);        
        this.handleClick=this.handleClick.bind(this);
        this.getName=this.getName.bind(this);
        this.getPassword=this.getPassword.bind(this);
        this.account={
            name:'',
            password:'',
        }
        this.check=false;
    }
    handleClick(){
     if(this.check){
         alert('thanh cong');
     }
     else{
         alert('that bai');
     }
    }
    getName(e){
        let regex=/^[a-zA-Z0-9]+$/;
        let name=e.target.value;
        if(name.match(regex)){
            this.account=Object.assign({},this.account,{name:name});
            this.check=true;
        }
        else{
            this.check=false;
        }
    }
    getPassword(e){
        let regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        let password=e.target.value;
        if(password.match(regex)){
            this.account=Object.assign({},this.account,{password:password});
            this.password={password};
            this.check=true;
        }
        else{
           this.check=false;
       }
    }
render(){
        return(
            <div className="login">
                <h1>DooShop</h1>
                <form>
                    <label htmlFor="nameUser" >Tên đăng nhập</label>
                    <input type="text" name="nameUser" onChange={(e)=>{this.getName(e)}} />
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="password" name="password"  onChange={(e)=>{this.getPassword(e)}}/>
                    <button type="button" onClick={this.handleClick}>Đăng nhập</button>
                </form>
                <div className="auth-order">
                    <div>
                        <a href=""><i class="fab fa-google"></i></a>
                    </div>
                    <div>
                        <a><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
                <p>Bạn chưa có tài khoản    <Link to="/sing-in">Đăng ký</Link></p>
            </div>
        )
    }
}
export default Login;