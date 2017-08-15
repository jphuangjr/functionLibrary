
var testData = [
  {
    id: "927ee4d9-d379-3a99-8370-7365455d5a31",
    name: "Textfile1.txt",
    type: "File",
    action: "Attributes",
    fullPath: "\Device\HarddiskVolume2\Windows\Test\Textfile1.txt",
    occuredAt: "2017-08-04T02:34:20.962+0000",
    actor: {
      process: "attrib.exe",
      imagePath: "\Device\HarddiskVolume2\Windows\system32\attrib.exe",
      securitySettings: null,
      userName: "Win81x64FIM\Administrator",
      userId: null
    },
    profiles: [
      {
        rules: [
          {
            severity: 3
          }
        ]
      }
    ],
    asset: {
      id: "2936e733-64c6-41aa-a333-f185db57485d",
      name: "WIN81X64FIM",
      interfaces: [
        {
          address: "10.112.205.124"
        },
        {
          address: "fe80:0:0:0:21ac:8c87:5ffb:72b1"
        }
      ]
    }
  },
  {
    id: "fc9d7fd0-95f9-3f85-b19f-0afa915359dc",
    name: "Textfile1.txt",
    type: "File",
    action: "Create",
    fullPath: "\Device\HarddiskVolume2\Windows\Test\Textfile1.txt",
    occuredAt: "2017-08-04T02:34:20.915+0000",
    actor: {
      process: "cmd.exe",
      imagePath: "\Device\HarddiskVolume2\Windows\system32\cmd.exe",
      securitySettings: null,
      userName: "Win81x64FIM\Administrator",
      userId: null
    },
    profiles: [
      {
        rules: [
          {
            severity: 3
          }
        ]
      }
    ],
    asset: {
      id: "2936e733-64c6-41aa-a333-f185db57485d",
      name: "WIN81X64FIM",
      interfaces: [
        {
          address: "10.112.205.124"
        },
        {
          address: "fe80:0:0:0:21ac:8c87:5ffb:72b1"
        }
      ]
    }
  },
  {
    id: "9aa19ee7-1643-3501-9b58-92c01ce4940b",
    name: "Textfile1.txt",
    type: "File",
    action: "Attributes",
    fullPath: "\Device\HarddiskVolume2\Windows\Test\Textfile1.txt",
    occuredAt: "2017-08-04T02:34:20.900+0000",
    actor: {
      process: "attrib.exe",
      imagePath: "\Device\HarddiskVolume2\Windows\system32\attrib.exe",
      securitySettings: null,
      userName: "Win81x64FIM\Administrator",
      userId: null
    },
    profiles: [
      {
        rules: [
          {
            severity: 3
          }
        ]
      }
    ],
    asset: {
      id: "2936e733-64c6-41aa-a333-f185db57485d",
      name: "WIN81X64FIM",
      interfaces: [
        {
          address: "10.112.205.124"
        },
        {
          address: "fe80:0:0:0:21ac:8c87:5ffb:72b1"
        }
      ]
    }
  }
];

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res){
  console.log("here");
  res.send(testData);
});


app.listen(4567);