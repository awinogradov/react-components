// FIXME: HOT FIX!!!

block('select').elem('button')(
    def()(function() {
        var select = this._select,
            ctx = this.ctx,
            mods = this.mods;

            console.log(ctx);
        return applyCtx({
            block : 'button',
            mix : { block : this.block, elem : this.elem },
            mods : {
                size : mods.size,
                theme : mods.theme,
                view : mods.view,
                focused : mods.focused,
                disabled : mods.disabled,
                checked : mods.mode !== 'radio' && !!this._checkedOptions.length
            },
            attrs : {
                role : 'listbox',
                'aria-owns' : this._optionIds.join(' '),
                'aria-multiselectable' : mods.mode === 'check'? 'true' : undefined,
                'aria-labelledby' : this._selectTextId
            },
            id : select.id,
            tabIndex : select.tabIndex,
            content : [
            // HARDCODE!!! apply('content') не пашет!!!
                {
                    elem: 'text',
                    content: select.text
                },
            // HARDCODE!!!
                { block : 'icon', mix : { block : 'select', elem : 'tick' } }
            ]
        });
    }),
    def()(function() {
        return applyNext({ _selectTextId : this.generateId() });
    })
);

block('button').elem('text').match(function() { return this._select; })(
    attrs()(function() {
        return { id : this._selectTextId };
    })
);