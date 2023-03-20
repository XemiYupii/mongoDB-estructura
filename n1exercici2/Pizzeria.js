db.Provincies.insertMany([
	{
	 nom:'Tarragona',
	 localitats:[
		{localitat_id:ObjectId(),nom:'Tarragona'},
		{localitat_id:ObjectId(), nom:'Reus'},
		{localitat_id:ObjectId(),nom:'Salou'}
	 ]
	},
	{
	 nom:'Barcelona',
	 localitats:[
		{localitat_id:ObjectId(),nom:'Barcelona'},
		{localitat_id:ObjectId(),nom:'Badalona'},
		{localitat_id:ObjectId(),nom:'Canet de Mar'}
	 ]
	},
	{
	 nom:'Girona',
	 localitats:[
		{localitat_id:ObjectId(),nom:'Peralada'},
		{localitat_id:ObjectId(),nom:'Figueres'},
		{localitat_id:ObjectId(),nom:'Girona'}
	 ]
	}
])

db.Adreces.insertOne({
	direccio:'carrer Vila Major, 98, baix 1',
	codi_postal:08037,
	ubicacio:
		{
		 provincia:
			{
			 $ref:'Provincies',
			 $id: ObjectId('64183df4a388ad7abb68c020')
			},
		localitat:
			{
			 $ref:'Provincies.localitats',
			 $id:ObjectId('64183df4a388ad7abb68c01d')
			}
		}
})

db.Adreces.insertOne({
	direccio:'carrer Mirador 71, baix 2',
	codi_postal:08037,
	ubicacio:
		{
		 provincia:
			{
			 $ref:'Provincies',
			 $id: ObjectId('64183df4a388ad7abb68c020')
		},
		 localitat:
			{
			 $ref:'Provincies.localitats',
			 $id:ObjectId('64183df4a388ad7abb68c01d')
			}
		}
})

db.Clients.insertOne({
	nom:'Gemma',
	cognoms:'Zamora',
	telefon:684930048,
	Adreça:
		{
		 $ref:'Adreces',
		 $id: ObjectId('64184672a388ad7abb68c021')
		}
})

db.Categories.insertMany([
	{
	 nom:'Pizza',
	 productes:[
		{
		 producte_id:ObjectId(),
		 nom:'Margarita',
		 descripcio:'tomaquet i formatge',
		 imatge:'image.jpg',
		 preu:12.55
		},
		{
		 producte_id:ObjectId(),
		 nom:'Bacon',
		 descripcio:'tomaquet, formatge i bacon',
		 imatge:'image.jpg',preu:15
		}
	 ]
	},
	{
	 nom:'Beguda',
	 productes:[
		{
		 producte_id:ObjectId(),
		 nom:'aigua',
		 descripcio:'sense gas',
		 imatge:'image.jpg',
		 preu:0.50
		},
		{
		 producte_id:ObjectId(),
		 nom:'CocaCola',
		 descripcio:'refresc',
		 imatge:'image.jpg',
		 preu:1.50
		}
	 ]
	},
	{
	 nom:'Hamburguesa',
	 productes:[
		{
		 producte_id:ObjectId(),
		 nom:'Chesse Burguer',
		 descripcio:'Burger amb formatge',
		 imatge:'image.jpg',
		 preu:7.88
		},
		{
		 producte_id:ObjectId(),
		 nom:'Bacon Burguer',
		 descripcio:'Burguer amb bacon i formatge',
		 imatge:'image.jpg',
		 preu:11.5
		}
	 ]
	}
])

db.Botigues.insertOne({
	Adreça:
		{
		 $ref:'Adreces',
		 $id:ObjectId('64185704a388ad7abb68c032')
		},
	empleats:[
		{
		 empleat_id:ObjectId(),
		 nom:'Ignasi',
		 cognoms:'Garcia, Velazquez',
		 nif:'38506773G',
		 rol:'repartidor'
		},
		{
		 empleat_id:ObjectId(),
		 nom:'Maria Virtudes',
		 cognoms:'Conejos Fernandez',
		 nif:'37495730J',
		 rol:'cuiner'
		}
	]
})

db.Comandes.insertOne({
	data_hora:'2023-07-26T21:00:00.000',
	entrga_a_domicili:true,
	productes_comanda:[
		{
		 producte:
		 	{
			 $ref:'Categories.productes',
			 $id:ObjectId('6418509ba388ad7abb68c029')
			},
		 quantitat:1
		},
		{
		 producte:
		 	{
			 $ref:'Categories.productes',
			 $id:ObjectId('6418509ba388ad7abb68c02c')
			},
		 quantitat:2
		},
		{
		 producte:
			{
			 $ref:'Categories.productes',
			 $id:ObjectId('6418509ba388ad7abb68c02d')
			},
		 quantitat:1
		}
	],
	preu_total:23.43,
	Botiga:
		{
		 $ref:'Botigues',
		 $id:ObjectId('64185943a388ad7abb68c03a')
		},
	Client:
		{
		 $ref:'Clients',
		 $id:ObjectId('64184b58a388ad7abb68c022')
		},
	data_hora_lliurament:'2023-07-26T21:30:00.000',
	Empleat:
		{
		 $ref:'Botigues.empleats',
		 $id:ObjectId('64185943a388ad7abb68c038')
		}
})


