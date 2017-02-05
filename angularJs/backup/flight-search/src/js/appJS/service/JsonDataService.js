(function(){

	app.service('JsonDataService',function(){
		var _this = this;

		this.data = {
    "cities": [
        {
            "id": 1,
            "name": "Ahmedabad"
        },
        {
            "id": 2,
            "name": "Pune"
        },
        {
            "id": 3,
            "name": "Delhi"
        },
        {
            "id": 4,
            "name": "Mumbai"
        }
    ],
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
        Departure:'10:00 AM',
        Arrival:'12:00 PM',
        originCity:'Delhi',
        originAbrivation:'DEL',
        destinationCity:'Pune',
        destiAbrivation:'PNQ',
        totalPrice:10000
    },
    {
        id:'3',
        FlightNumber:'A-204',
        Departure:'10:00 AM',
        Arrival:'12:00 PM',
        originCity:'Delhi',
        originAbrivation:'DEL',
        destinationCity:'Pune',
        destiAbrivation:'PNQ',
        totalPrice:1000
    },
    {
        id:'4',
        FlightNumber:'A-205',
        Departure:'10:00 AM',
        Arrival:'12:00 PM',
        totalPrice:1500,
        originCity:'Mumbai',
        originAbrivation:'MUB',
        destinationCity:'Nagpur',
        destiAbrivation:'NAG'
    }
    ]

};

	});

})();