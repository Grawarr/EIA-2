var Form;
(function (Form) {
    window.addEventListener("load", hndLoad);
    var slider;
    function hndLoad(_event) {
        slider = document.getElementById("slider");
        slider.addEventListener("change", hndChange);
        console.log("slider");
    }
    function hndChange(_event) {
        //console.log(slider.value);
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, _a = formData.entries(); _i < _a.length; _i++) {
            var entry = _a[_i];
            console.log(formData.entries());
        }
    }
})(Form || (Form = {}));
//# sourceMappingURL=%C3%9Cbung120422.js.map