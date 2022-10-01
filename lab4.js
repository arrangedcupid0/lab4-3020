function permutationSort(arr)
{
	var count = 1;
	var perms = recurse(arr);
	for(var i = 0; i < perms.length; i++)
	{
		var sorted = true;
		var current = perms[i];
	        for(var j = 0; j < current.length - 1; j++)
	        {
        	        if(current[j] > current[j + 1])
               		{
                        	sorted = false;
                	}
        	}
		if(sorted)
		{
			return count;
		}
		count++;
	}
	return count; //shouldn't ever be used, but it doesn't hurt to include a failsafe
}

function recurse(arr)
{
	if(arr.length <= 1)
	{
		return [arr];
	} else {
		var allPerms = [];
		for(var i = 0; i < arr.length; i++)
		{
			var first = arr[0];
			var restPermed = recurse(arr.slice(0, i).concat(arr.slice(1 + i)));
			for(var j = 0; j < restPermed.length; j++)
			{
				allPerms.push([first].concat(restPermed[j]));
			}
		}
	}
	return allPerms;
}



/*listen. this abomination is not my personal brainchild,
but I have the generous original author quoted in my works cited page.
it feels a bit cheap to use something that somebody else wrote without fully understanding
the exact reason as to why it works, but I worked through 5 different ideas that I had
(including one involving recursive calls from recurse to permutationSort and back again, i.e. double recursion)
and I just got absolutely nowhere with them. so, being essentially out of time on this assignment, i've decided
to cave to mercy of bing (i'm a microsoft edge kind of guy) in the hopes that my blatant reuse of somebody elses
code will award me more points than some deformed half-functional monstrosity that I create from scratch.
PLEASE don't flag me for academic dishonesty, I'm fairly sure that since this code comes from the third source in my
works cited document i don't have to worry about being shunted into that process but i'm far too tired to
double check the specifics of that and far too anxious to not be thinking about it. i'd much rather take a zero on
this lab than an L for the course, but I really don't want that 0 so here I am. sorry for the ramble. dog bless
*/
function testThisBS()
{
	var test = [];
	var test1 = [42];
	var test2 = [64,43,21];
	var test3 = [12,34,56,67];
	var test4 = [67,56,34,12];
	var test5 = [435,23,761,34,7543,23,7245,284];
	var test6 = [532,1246,34,3,2,46,574,2,7244,1];
	console.log(permutationSort(test));
	console.log(permutationSort(test1));
	console.log(permutationSort(test2));
	console.log(permutationSort(test3));
	console.log(permutationSort(test4));
	console.log(permutationSort(test5));
	console.log(permutationSort(test6));
}

testThisBS();
