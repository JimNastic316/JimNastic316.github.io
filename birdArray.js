var birds = [
	{
	  type:"Eastern Towhee",
	  habitat:"overgrown fields and woodlands.",
	  food:"seeds, fruits, insects, spiders, millipedes, centipedes, and snails, as well as soft leaf and flower buds in spring."
	},
	{
	  type:"Red-winged Black Bird",
	  habitat:"wet places like fresh or saltwater marshes and rice paddies.",
	  food:"insects in the summer and seeds, including corn and wheat, in the winter."
	},
	{
	  type:"American Goldfinch",
	  habitat:" weedy fields, open floodplains, and other overgrown areas, particularly with sunflower, aster, and thistle plants for food and some shrubs and trees for nesting. Goldfinches are also common in suburbs, parks, and backyards.",
	  food:"nyjer and sunflower seeds."
	},
	{
	 type:"Red-tailed Hawk",
 	 habitat:" just about every type of open habitat on the continent. This includes desert, scrublands, grasslands, roadsides, fields and pastures, parks, broken woodland, and 	(in Mexico) tropical rainforest.",
	  food:" voles, mice, wood rats, rabbits, snowshoe hares, jackrabbits, and ground squir	rels. The hawks also eat birds, including pheasants, bobwhite, starlings, and blackbirds; as well as snakes and carrion."
	}
	
]

function buildString(bird){
  var result = "The " + bird.type + " can be found in " + bird.habitat;
  result+= " They like to eat " + bird.food;
  return result;
}

birds.forEach(function(bird){
	console.log(buildString(bird))
});