import 'package:flutter/material.dart';

main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    
    
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
         title: Text('Easylist'),

         
        ),
        body: TextField(  
          textAlign: TextAlign.center,
          autofocus: true,
          decoration: InputDecoration(
            border: OutlineInputBorder(),
            icon: Icon(Icons.print),
            
          
            
 ),
      ),
    
    ),);
  }
}
