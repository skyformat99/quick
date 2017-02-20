import _ from 'underscore';
import $ from 'jquery';
class BaseView {
    constructor(param) {
        this.$app = $('#app');
        this.id = '#detail';
        this.$ele = $('<div id="detail" class="view">');
        this.model = param.model;
        this.template = param.template;
        this.filter();
        this.render();
    }
    render() {
        let $ele =  this.$ele;
        let id = this.id;
        let tpl = this.template;
        let model = this.model;
        let html = _.template(tpl)(model);
        $ele.html(html);
        this.$app.remove(id).append($ele);
    }
    filter() {
        let _tpl = this.template;
        _tpl.indexOf('module.exports = ') == 0 ? _tpl = _tpl.replace('module.exports = ', '') : '';
        this.template = _tpl;
    }
}
export { BaseView };
