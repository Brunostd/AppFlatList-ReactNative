import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface FlatListObject {
  name: string;
  numero: string;
  email: string;
}

interface PessoaProps {
  item: FlatListObject;
}

class Pessoa extends Component<PessoaProps, {}> {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text>{this.props.item.name}</Text>
        <Text>{this.props.item.numero}</Text>
        <Text>{this.props.item.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: 'black',
  },
});

export default Pessoa;
