var FilterBlock = React.createClass({
    diaplayName: 'FilterBlock',

    propTypes: {
        data: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    getInitialState: function () {
        return {
            isSorted: false,
            filter: '',
            list: [...this.props.data]
        };
    },

    onResetFormHandler: function () {
        this.setState({
            isSorted: false,
            filter: ''
        }, this.processList);
    },

    onChangeSortHandler: function (value) {
        this.setState({ isSorted: value }, this.processList);
    },

    onChangeFilterHandler: function (value) {
        this.setState({ filter: value }, this.processList);
    },

    processList: function () {
        let arr = [...this.props.data];

        if (this.state.filter.trim()) {
            arr = arr.filter(item => item.includes(this.state.filter));
        }
        if (this.state.isSorted) {
            arr.sort()
        }

        this.setState({ list: arr });
    },

    render: function () {
        var arr = this.state.list.map(v =>

            React.DOM.div({ key: v, className: 'list-item' },
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
            React.DOM.div({ className: 'list-wrapper' }, arr),
        );
    },

})