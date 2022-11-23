import React from 'react';
import { connect } from 'react-redux';
import { setError } from '../../store/reducers/errorSlice';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    }

    render() {
        if (this.state.hasError) {
            this.props.setError(true);
            this.props.onError();
        }

        return this.props.children;
    }
}

const mapStateToProps = (state) => ({
    isError: state.error.isError,
});

const mapDispatchToProps = { setError };

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
