import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SingIn extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.getName=this.getName.bind(this);
        this.getEmail=this.getEmail.bind(this);
        this.checkRetypePassword=this.checkRetypePassword.bind(this);
        this.getPassword=this.getPassword.bind(this);
        this.state={
            user:[
                {name:'',check:true},
                {email:'',check:true},
                {password:'',check:true}
            ]
        };
    }
    handleClick(){
        console.log(this.state);
        let check=this.state.user.some((item)=>item.check===false);
        console.log(check);
    }
    checkfn(elementInput,check,regex){
        if(check.match(regex))
                {
                    elementInput.style.border="2px solid #337ab7";
                    elementInput.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    return true;
                }
                let message=document.createElement("lable");
                message.innerHTML="<lable>Loi nhap lai</lable>";
                elementInput.appendChild(message);
                elementInput.style.border="2px solid red";
                elementInput.style.boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
                return false;
    }
    getName(e){
        let nameInput=document.querySelector('[name="nameUser"]');
        let regex=/^[a-zA-Z0-9]+$/;
        let name=e.target.value;
        let checked=this.checkfn(nameInput,name,regex);
        console.log(checked);
        this.setState(Object.assign({},this.state,
            {user:[{name:e.target.value,check:checked},...this.state.user.slice(1,3)]}));
           
    }
    getEmail(e){

        let regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let inputEmail=document.querySelector('[name="email"]');
        let valueEmail=e.target.value;        
        let checked=this.checkfn(inputEmail,valueEmail,regex);
        console.log(checked);
        this.setState(Object.assign({},this.state,
            {user:[{name:this.state.user[0].name},{email:e.target.value,check:checked},{password:this.state.user[2].password}]}))
    }
    getPassword(e){
        let regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        let inputPassword =document.querySelector('[name="password"]');
        let value=e.target.value;
        let checked=this.checkfn(inputPassword,value,regex);
        console.log(checked);
        this.setState(Object.assign({},this.state,
            {user:[...this.state.user.slice(0,2),{password:e.target.value,check:checked}]}))
    }
    checkRetypePassword(){
    }
    render() {
        return(
            <div className="sing-in">
            <h1>DooShop</h1>
            <form >
                <label htmlFor="nameUser">Tên đăng nhập</label>
                <input type="text" name="nameUser" onBlur={(e)=>this.getName(e)}/>
                <label htmlFor="email" >Địa chỉ Email</label>
                <input type="text" name="email" onBlur={(e)=>this.getEmail(e)} />
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" name="password" onBlur={(e)=>this.getPassword(e)}/>
                <label htmlFor="retype-password">Nhập lại mật khâu</label>
                <input type="password" name="retype-password"/>
                <button type="button" onClick={this.handleClick}>Đăng ký</button>
            </form>
            <div className="auth-order">
                <div>
                    <a href=""><i class="fab fa-google"></i></a>
                </div>
                <div>
                    <a><i class="fab fa-facebook"></i></a>
                </div>
            </div>
            <p>Bạn đã có tài khoản    <Link to="/">Đăng nhập</Link></p>
        </div>
        )
    }
}

export default SingIn;