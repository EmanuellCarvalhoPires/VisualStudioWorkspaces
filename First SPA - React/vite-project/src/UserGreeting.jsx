/* eslint-disable react/prop-types */
// ESSE CÓDIGO NÃO ESTÁ MOSTRANDO ERRO POR CAUSA DA LINHA ACIMA
import PropTypes from "prop-types"


function UserGreeting(props){



    return(props.isLoggedIn ? <h2>Welcome</h2> : <h2>Not Welcome</h2>);


}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
}

UserGreeting.defaultProps = {
    isLoggedIn: false
}

export default UserGreeting