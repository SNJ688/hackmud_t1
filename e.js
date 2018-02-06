function (context, args){
    
	// https://github.com/SNJ688/hackmud_t1
	
	var t = args.t;                // target = #s.loc
	var l = args.l
	var pc = args.p
	
	
	var ln = ["EZ_21", "EZ_35", "EZ_40"]
	var p = ["derp", "open","unlock","release"];
	var lk = {EZ_21:"", EZ_35:"digit", EZ_40:"ez_prime"}
	var d = [1,2,3,4,5,6,7,8,9,10,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101];
	
	var i = 0;
	var u = 0;
	var x = "";
	var z = x;
	var c = x;
	var y = x;
	var r = "not the cor";
	var o = pc;
	
	if(l == ln[0])
	{
		z = z + "`X[21C]`";
		while ( r.indexOf('not the cor') > -1 && i < 5 )
		{
			o[l] = p[i];
			c = "";
			for(var ok in o)
			{
				c = c + "" +  ok + ":" +o[ok] + ", "
			}
			r = t.call (o);
			x =  y + "\n`22P``X"+i+"`{" +c+ "} =>" + r;
			i++;                                                
		}
		z = z + x;
		z = z + "`X[E]`";
	} else
	{
		z = z + "`X[34C1]`";
		r = "";
		while (r.indexOf(lk[l]) === -1 && i < 5 )
		{
			o[l] = p[i];
			//o[lk[l]] = d[0];
			c = "";
			for(var ok in o)
			{
				c = c + "" +  ok + ":" +o[ok] + ", "
			}
			r = t.call (o);
			x =  y + "\n`234P``X"+i+"`{" +c+ "} =>" + r;
			i++;                                                
		}
		i--;
		z = z + x;
		x = "";
		z = z + "\n`X[34C2]`";
		r = "not the cor";
		while ( r.indexOf('not the cor') > -1 && u < 120 )
		{
			o[l] = p[i];
			o[lk[l]] = d[u];
			c = "";
			for(var ok in o)
			{
				c = c + "" +  ok + ":" +o[ok] + ", "
			}
			r = t.call (o);
			x =  y + "\n`234D``X"+u+"`{" +c+ "} =>" + r;
			u++;                                                
		}
		z = z + x;
		z = z + "`X[E]`";
		z = r
	}

	
    return {r:z, c:o};
   
}