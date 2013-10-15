define('bui/grid/plugins/rownumber',function (require) {

  var CLS_NUMBER = 'x-grid-rownumber';
  function RowNumber(config){
    RowNumber.superclass.constructor.call(this, config);
  }

  BUI.extend(RowNumber,BUI.Base);

  RowNumber.ATTRS = 
  /**
   * @lends BUI.Grid.Plugins.CheckSelection.prototype
   * @ignore
   */ 
  {
    /**
    * column's width which contains the checkbox
    */
    width : {
      value : 40
    },
    /**
    * @private
    */
    column : {
      
    }
  };

  BUI.augment(RowNumber, 
  {
    createDom : function(grid){
      var _self = this;
      var cfg = {
            title : '',
            width : _self.get('width'),
            fixed : true,
            resizable:false,
            sortable : false,
            renderer : function(value,obj,index){return index + 1;},
            elCls : CLS_NUMBER
        },
        column = grid.addColumn(cfg,0);
      _self.set('column',column);
    }
  });
  
  return RowNumber;
  
});