const React = require('react');
const ApolloClient = require('apollo-boost');
const { ApolloProvider } = require('react-apollo');

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
            <ApolloProvider client={client}>
                <div id='main'>
                    <Search/>
                    <Results/>
                </div>
            </ApolloProvider>
        );
    }
}

module.exports = Main;
