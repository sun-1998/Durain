import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default class Index5 extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>

         <Mybutton
                  title="โรคจากเชื้อราไฟทอฟธอรา"
                  customClick={() => this.props.navigation.navigate('Index51')}
         />
         <Mybutton
                  title="โรคใบติด"
                  customClick={() => this.props.navigation.navigate('Index52')}
         />
         <Mybutton
                  title="เพลี้ยไก่แจ้"
                  customClick={() => this.props.navigation.navigate('Index53')}
         />
         <Mybutton
                  title="ไรแดง"
                  customClick={() => this.props.navigation.navigate('Index54')}
         />
         <Mybutton
                  title="หนอนเจาะผล"
                  customClick={() => this.props.navigation.navigate('Index55')}
         />
         <Mybutton
                  title="บหนอนเจาะเมล็ดทุเรียน"
                  customClick={() => this.props.navigation.navigate('Index56')}
         />
         <Mybutton
                  title="เพลี้ยแป้ง"
                  customClick={() => this.props.navigation.navigate('Index57')}
         />
         <Mybutton
                  title="โรคผลเน่า"
                  customClick={() => this.props.navigation.navigate('Index58')}
         />


      </View>
    );
  }
}