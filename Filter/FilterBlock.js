var FilterBlock = React.createClass({
    diaplayName: 'FilterBlock',

    propTypes: {
        data: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    getInitialState: function () {
        return {
            arr: [...this.props.data],
            isSorted: false,
            filter: '',
        };
    },

    onResetFormHandler: function () {
        this.setState({
            isSorted: false,
            filter: ''
        });
    },

    onChangeSortHandler: function (value) {
        this.setState({ isSorted: value });
    },

    onChangeFilterHandler: function (value) {
        this.setState({ filter: value });
    },

    getArrayToRender: function () {
        let arr = [...this.state.arr];

        if (this.state.isSorted) {
            arr.sort()
        }

        if (this.state.filter.trim()) {
            arr = arr.filter(item => item.includes(this.state.filter));
        }

        return arr;
    },

    render: function () {
        var arr = this.getArrayToRender().map(v =>

            React.DOM.div({ key: v,className:'list-item' },
                v
            ),
        );

        return React.DOM.div({ className: 'FilterBlock' },
            React.createElement(FilterForm, {
                onChangeTextbox: this.onChangeFilterHandler,
                onClickCheckbox: this.onChangeSortHandler,
                onClickButton: this.onResetFormHandler,
                isSorted: this.state.isSorted,
                filter: this.state.filter
            }, null),
            React.DOM.div({className:'list-wrapper'}, arr),
        );
    },

})