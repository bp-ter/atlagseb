var Test = /** @class */ (function () {
    function Test() {
        this.startBind();
        this.eventHandler();
    }
    Test.prototype.startBind = function () {
        this.idoInput = document.querySelector('#ido');
        this.tavInput = document.querySelector('#tav');
        this.atlagInput = document.querySelector('#atlag');
        this.szamitGomb = document.querySelector('#szamitGomb');
    };
    Test.prototype.eventHandler = function () {
        var _this = this;
        var _a;
        (_a = this.szamitGomb) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.onClickCalcButton();
        });
    };
    Test.prototype.onClickCalcButton = function () {
        console.log('Mükszik');
        if (this.tavInput && this.idoInput) {
            var tav = Number(this.tavInput.value);
            var ido = Number(this.idoInput.value);
            this.atlag = this.calcAvarageSpeed(tav, ido);
            this.renderResult();
        }
    };
    Test.prototype.calcAvarageSpeed = function (path, time) {
        return path / time;
    };
    Test.prototype.renderResult = function () {
        if (this.atlagInput) {
            this.atlagInput.value = String(this.atlag);
        }
    };
    return Test;
}());
new Test();
