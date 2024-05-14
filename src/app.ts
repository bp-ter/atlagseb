class Test {
    idoInput: HTMLInputElement | null;
    tavInput : HTMLInputElement | null;
    atlagInput: HTMLInputElement | null;
    szamitGomb: HTMLElement | null;

    atlag : number

    constructor(){
        this.startBind();
        this.eventHandler();
    }

    startBind(){
        this.idoInput = document.querySelector('#ido');
        this.tavInput = document.querySelector('#tav');
        this.atlagInput = document.querySelector('#atlag');
        this.szamitGomb = document.querySelector('#szamitGomb');
    }

    eventHandler(){
        this.szamitGomb?.addEventListener('click', () =>{
            this.onClickCalcButton();
        })
    }

    onClickCalcButton(){
        console.log('Mükszik');
        if(this.tavInput && this.idoInput){
            const tav = Number(this.tavInput.value);
            const ido = Number(this.idoInput.value);
            this.atlag = this.calcAvarageSpeed(tav,ido);
            this.renderResult();
        }
    }

    calcAvarageSpeed(path:number, time:number):number{
        return path/time;
    }

    renderResult(){
        if(this.atlagInput){
            this.atlagInput.value = String(this.atlag);
        }
    }
}

new Test();