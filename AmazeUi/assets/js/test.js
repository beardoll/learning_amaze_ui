$(function() {
    $('#doc-vld-msg').validator({
        onValid: function(validity) {
            $(validity.field).closest('.am-form-group').find('.am-alert').hide();
        },

        onInValid: function(validity) {
            var $field = $(validity.field);
            var $group = $field.closest('.am-form-group');
            var $alert = $group.find('.am-alert');
            // 使用自定义的提示信息 或 插件内置的提示信息
            var msg = $field.data('validationMessage') || this.getValidationMessage(validity);

            if (!$alert.length) {
                $alert = $('<div class="am-alert am-alert-danger"></div>').hide().
                appendTo($group);
            }

            $alert.html(msg).show();
        }
    });
});

$(function() {
    var $form = $('#form-with-tooltip');
    var $tooltip = $('<div id="vld-tooltip">提示信息！</div>');
    $tooltip.appendTo(document.body);

    $form.validator();

    var validator = $form.data('amui.validator');

    $form.on('focusin focusout', '.am-form-error input', function(e) {  /*amazeui定义了focusin和focusout的方法*/
        if (e.type === 'focusin') {
            var $this = $(this);
            var offset = $this.offset();
            var msg = $this.data('foolishMsg') || validator.getValidationMessage($this.data('validity'));

            $tooltip.text(msg).show().css({
                left: offset.left + 10,
                top: offset.top + $(this).outerHeight() + 10
            });
        } else {
            $tooltip.hide();
        }
    });
});

$(function(){
    $('#canvasbtn').on('click',function(){
        if($(this).hasClass('canvas-on')){
            $(this).removeClass('canvas-on').addClass('canvas-off');
            $('#doc-oc-demo3').offCanvas('open');
        }else{
            $(this).removeClass('canvas-off').addClass('canvas-on');
            $('#doc-oc-demo3').offCanvas('close');
        }
    })
})
