const React = require('react');
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const Search = require('Search');
const Results = require('Results');


// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql'
});

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <ApolloProvider client={client}>
                <div id='main'>
                    <Search/>
                </div>
            </ApolloProvider>
            </div>
        );
    }
}

module.exports = Main;

// export default Main;
