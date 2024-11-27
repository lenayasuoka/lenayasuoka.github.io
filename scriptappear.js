/*
	methods called by index.html
*/

// list of objects made visible, per level
var remember = new Array();

/*
	close everything below level 'level' if needed,
	show item 'name'
	and remember it as item shown for level 'level'
*/
function show(name,level)
{
	// if not the first call, then there's something in remember
	if( remember[level] )
	{
		// if what is supposed to be shown is already visible, don't do anything
		if( remember[level] == name )
			return;
		
		// if not, then it means everything below level should change, so close all
		closeAll(level);
   }

   // if name is provided, make it visible
   if( name )
   {
		var x = getObj(name);
		x.visibility = 'visible';
   }
   // remember it
   remember[level] = name;
}

/*
	close everything below level 'level'
*/
function closeAll(level)
{
	for( i = remember.length - 1; i >= level; i-- )
	{
		if( remember[i] ) // element of array remember is not an empty string
		{
			var x = getObj( remember[i] );
			x.visibility = 'hidden';
		}
		remember[i] = null; // forget this level
	}
}

/*
	return style of item we are looking for, to make it visible or hidden
*/
function getObj(name)
{
	if( document.getElementById )
		return document.getElementById( name ).style;

	if( document.all )
		return document.all[name].style;

	if( document.layers )
		return document.layers[name];
	
	return false;
}

  /* fullscreen image */
var img = document.getElementById("MyImage");

let enlarged=0;
function enlargeImg() {
     if (enlarged===0){
       img.style.transform = "scale(2)";
       enlarged = 1;
     }
     else{
       img.style.transform = "scale(1)";
       enlarged = 0;
     }
     return enlarged;
  }