if ("boolean" == typeof(_op_cor_settings_loaded) && "function" == typeof(_op_cor_top_initialize)) {
    _op_cor_top_initialize();
    opc_$(document).ready(function() {
        _op_cor_bottom_initialize();
    });
}