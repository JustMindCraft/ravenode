import "babel-polyfill";
import ravenode from '../../ravenode';
import { Button, Container, TextField, Paper, Typography, CircularProgress } from '@material-ui/core';
import * as React from 'react';
import * as  ReactDOM from 'react-dom';

interface IAppState {
    msg: string,
    back: string,
    backMsg: string,
    loading: boolean
}
   
class App extends React.Component<any, IAppState> {

    private instance:any = null;
    private client:any = null;

    constructor(props:any){
        super(props);
        this.state ={
            msg: "",
            back: "",
            backMsg: "",
            loading: false
        }
    }

    async componentDidMount(){
        this.instance = await  ravenode.init();
        this.client = this.instance.api;
        this.setState({
            loading: true,
        })
    }

    handleChange = (e:any) => {
        this.setState({
            msg: e.target.value
        })
    }

    handleChangeBack = (e:any) => {
        this.setState({
            back: e.target.value
        })
    }

    addText = async (e:any) => {
        const { msg } = this.state;
        const content = require('buffer/').Buffer.from(msg); 
        const results = await this.client.add(content);
        this.setState({
            back: results[0].hash,
        })
    }
    readText = async (e:any) => {
        const { back } = this.state;
        this.client.cat(back, (err:any, file:any)=>{
            if (err) {
                throw err
            }
            const msg = file.toString('utf8');
            this.setState({
                backMsg: msg,
                msg
            })

        })
    }

    render(){
        const { msg, back, backMsg, loading } = this.state;
        if(!loading){
            return (
                <Container>
                    <CircularProgress />
                </Container>
            )
        }
        return (
            <Container>
                <TextField value={msg} onChange={this.handleChange} />
                <Button onClick={this.addText} variant="contained" color="primary">加密</Button>
                <br/>
                <br/>
                <Paper>
                    <TextField value={back} onChange={this.handleChangeBack} />
                    <Button  onClick={this.readText} variant="contained" color="primary">解密</Button>
                </Paper>
                <Paper>
                    <Typography variant="h1">
                        {backMsg}
                    </Typography>
                </Paper>

            </Container>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#app'));
