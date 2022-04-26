let FilterForm = React.createClass({
    displayName: 'FilterForm',

    propTypes: {
        onClickButton: React.PropTypes.func.isRequired,
        onClickCheckbox: React.PropTypes.func.isRequired,
        onChangeTextbox: React.PropTypes.func.isRequired,
        isSorted: React.PropTypes.bool.isRequired,
        filter: React.PropTypes.string.isRequired,
    },

    onClickButtonHandler: function () {
        this.props.onClickButton();
    },

    onClickCheckboxHandler: function (event) {
        this.props.onClickCheckbox(event.target.checked);
    },

    onChangeTextboxHandler: function (event) {
        this.props.onChangeTextbox(event.target.value);
    },

    render: function () {
        return React.DOM.div({ className: 'FilterForm' },
            React.DOM.input({
                type: 'checkbox',
                checked: this.props.isSorted,
                onClick: this.onClickCheckboxHandler
            }),
            React.DOM.input({
                type: 'text',
                value: this.props.filter,
                onChange: this.onChangeTextboxHandler
            }),
            React.DOM.button({
                type: 'button',
                onClick: this.onClickButtonHandler
            }, 'Clear'),
        )
    }
});