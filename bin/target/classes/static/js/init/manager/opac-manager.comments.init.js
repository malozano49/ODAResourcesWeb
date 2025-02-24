/**
 *  @file        : opac-manager.comments.init.js
 *
 *  @description : Inicio de acciones js para manager  comentarios
 *  @license     : baratz
 *  @copyright   : 2019
 *
 *  @author      : http://www.baratz.es/
 *  @date        : 2021-06-18
 *
 *  @validate    : https://jshint.com/
 */
// jshint jquery :true, esversion:10
/* globals Baratz */

/**
 *  Contenedor de acciones para páginas de manager
 *
 *  @cont OPINIONS
 *
 */
const OPINIONS={
  /**
   *  Inicialización
   *
   *  @method OPINIONS.init
   */
  init:()=>{
    OPINIONS.load_plugins();
  },
  /**
   *  Carga e inicializacion de plugins
   *
   *  @method OPINIONS.load_plugins
   */
  load_plugins:()=>{
    const listOfJS=[
      "js/commons/scripts.js",
      "js/commons/commons.js",
      "js/manager/opac-manager.comments.js",
    ];
    const control=Baratz.tmpls_actions.UTILS.requiredJSAsync(listOfJS);
    $.when(control).done(()=>{
      OPINIONS.secuencia_ejecucion();
    });
  },
  /**
   *  Secuencia de ejecucion de scripts
   *
   *  @method OPINIONS.secuencia_ejecucion
   */
  secuencia_ejecucion:()=>{
    // para ver mensajes de consoleScript poner true en utils.js -> Baratz.tmpls_actions.UTILS.console_script(false);
    // Baratz.tmpls_actions.GENERAL();
    Baratz.tmpls_actions.APPLY_SELECTPICKERS();
    Baratz.tmpls_actions.EMULATE_BMD();
    Baratz.tmpls_actions.BOTONERA_FLOTANTE();
    Baratz.tmpls_actions.EMULATE_BMD();
    Baratz.tmpls_actions.MODALES_JS();
    Baratz.tmpls_actions.CTRL_LOADING();
    Baratz.tmpls_actions.FILTERIZE_MARKJ();
    Baratz.tmpls_actions.BTN_MESSAGE();
  }
};

OPINIONS.init();
