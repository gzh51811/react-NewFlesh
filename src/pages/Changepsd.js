import React,{Component} from 'react';
import { Input,Button } from 'antd';


class Changepsd extends Component{
    
    state ={value1:'',value2:'',switch1:true,switch2:false,switch3:false,switch4:false}
    
    
    //在输入框发生变化的时候修改状态的值
    handleMaxBackUp= (event)=>{
        if(event && event.target && event.target.value){
        let value = event.target.value;
        this.setState(()=>({value1:value }))
        }
    }
    //在输入框发生变化的时候修改状态的值
    handleMaxRestoreUp = (event)=>{
        if(event && event.target && event.target.value){
        let value = event.target.value;
        this.setState(()=>({value2:value }))
        }
    }
    
    
    //点击保存的时候打出输入框中的值
    dianji=()=>{
        // console.log("666");
        // console.log(this.state.value2);
        if(this.state.switch1&this.state.switch2&this.state.switch3&this.state.switch4){
            if(this.state.value1 == this.state.value2){
                alert("yes");
            }else{
                alert("新密码不一致");
            }
        }
    }
    render(){
        const onChange = (e) => {
            console.log(e);
          };
        
        return <div className="changepsd">
            <h2>修改密码</h2>
            <Input placeholder="请输入用户名" 
                allowClear
                defaultValue="康庆峰" 
                size="large" 
                style={{ width: 450 }}
                prefix="*"
                onBlur={function(e){
                    if(e.target.value){
                        this.setState({
                            switch1:true
                        },()=>{
                            console.log(this.state);
                        })
                    }else{
                        this.setState({
                            switch1:false
                        },()=>{
                            console.log(this.state);
                        })
                    }
                }.bind(this)}
            /><br /><br />
            <Input.Password 
                placeholder="请输入修改前旧密码" 
                size="large" 
                allowClear
                style={{ width: 450 }}
                prefix="*"
                onBlur={function(e){
                    // 失去焦点回调
                    var val = e.target.value;
                    // console.log(e.target.value);
                    var reg = /^[a-zA-Z]\w{5,17}$/;
                    if(reg.test(val)){
                        console.log('666');
                        if(e.target.value){
                            this.setState({
                                switch2:true
                            },()=>{
                                console.log(this.state);
                            })
                        }
                    }else{
                        if(e.target.value){
                            this.setState({
                                switch2:false
                            },()=>{
                                console.log(this.state);
                            })
                        }
                        console.log('密码格式不对');
                    };
                }.bind(this)}
                
            /><br /><br />
            <Input.Password 
                placeholder="请输入修改后新密码" 
                size="large" 
                allowClear
                style={{ width: 450 }}
                prefix="*"
                onBlur={function(e){
                    // 失去焦点回调
                    var val = e.target.value;
                    // console.log(e.target.value);
                    var reg = /^[a-zA-Z]\w{5,17}$/;
                    if(reg.test(val)){
                        console.log('666');
                        if(e.target.value){
                            this.setState({
                                switch3:true
                            },()=>{
                                console.log(this.state);
                            })
                        }
                    }else{
                        if(e.target.value){
                            this.setState({
                                switch3:false
                            },()=>{
                                console.log(this.state);
                            })
                        }
                        console.log('密码格式不对');
                    };
                }.bind(this)}
                onChange ={event => this.handleMaxBackUp(event)}
                
            /><br /><br />
            <Input.Password 
                placeholder="请再次输入新密码" 
                size="large" 
                allowClear
                style={{ width: 450 }}
                prefix="*"
                onBlur={function(e){
                    // 失去焦点回调
                    var val = e.target.value;
                    // console.log(e.target.value);
                    var reg = /^[a-zA-Z]\w{5,17}$/;
                    if(reg.test(val)){
                        console.log('666');
                        if(e.target.value){
                            this.setState({
                                switch4:true
                            },()=>{
                                console.log(this.state);
                            })
                        }
                    }else{
                        if(e.target.value){
                            this.setState({
                                switch4:false
                            },()=>{
                                console.log(this.state);
                            })
                        }
                        console.log('密码格式不对');
                    };
                }.bind(this)}
                onChange ={event => this.handleMaxRestoreUp(event)}
            /><br /><br />
            <div>
                <Button type="primary" style={{ width: 450 }} size="large" onClick={this.dianji} >确定要做此操作</Button>
            </div>
        </div>
    }
}
export default Changepsd;