(function(){

	app.service('JsonDataService',function(){
		var _this = this;

		_this.data = {
   
            "flights": [
                {
                    id:'1',
                    FlightNumber:'A-201',
                    Departure:'10:00 AM',
                    Arrival:'12:00 PM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Delhi',
                    destiAbrivation:'DEL',
                    totalPrice:3500
                },
                {
                    id:'2',
                    FlightNumber:'A-202',
                    Departure:'02:00 AM',
                    Arrival:'04:00 AM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Delhi',
                    destiAbrivation:'DEL',
                    totalPrice:7500
                },
                {
                    id:'3',
                    FlightNumber:'A-203',
                    Departure:'08:00 AM',
                    Arrival:'10:00 PM',
                    originCity:'Delhi',
                    originAbrivation:'DEL',
                    destinationCity:'Pune',
                    destiAbrivation:'PNQ',
                    totalPrice:5000
                },
                {
                    id:'4',
                    FlightNumber:'A-204',
                    Departure:'10:00 AM',
                    Arrival:'12:00 PM',
                    originCity:'Mumbai',
                    originAbrivation:'MUM',
                    destinationCity:'Pune',
                    destiAbrivation:'PNQ',
                    totalPrice:3500
                },
                {
                    id:'5',
                    FlightNumber:'A-205',
                    Departure:'11:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Mumbai',
                    originAbrivation:'MUM',
                    destinationCity:'Pune',
                    destiAbrivation:'PNQ',
                    totalPrice:2500
                },
                {
                    id:'6',
                    FlightNumber:'A-206',
                    Departure:'11:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Mumbai',
                    destiAbrivation:'MUM',
                    totalPrice:2000
                },
                {
                    id:'7',
                    FlightNumber:'A-207',
                    Departure:'09:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Mumbai',
                    originAbrivation:'MUM',
                    destinationCity:'Delhi',
                    destiAbrivation:'DEL',
                    totalPrice:4500
                },
                {
                    id:'8',
                    FlightNumber:'A-208',
                    Departure:'08:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Pune',
                    originAbrivation:'PNQ',
                    destinationCity:'Nagpur',
                    destiAbrivation:'NAG',
                    totalPrice:6500
                },
                {
                    id:'9',
                    FlightNumber:'A-209',
                    Departure:'09:00 AM',
                    Arrival:'01:00 PM',
                    originCity:'Delhi',
                    originAbrivation:'DEL',
                    destinationCity:'Mumbai',
                    destiAbrivation:'MUM',
                    totalPrice:5500
                }
            ]

        };

	});

})();