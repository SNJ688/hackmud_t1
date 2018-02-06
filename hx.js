function (context, args){
    
	// https://github.com/SNJ688/hackmud_t1
	
	var t = args.t;
    var r = t.call({});
	var z = "";
	if(typeof r == 'string')
	{
		var lm = r.match(/(EZ_[0-9]+|c00[0-9]|l0cket)` lock/);
	} else 
	{
		for(var fr in r)
		{
			z = z + fr + ": " + r[fr] + "\n"
		}
		
		return {ok:false, msg:"Invalid response: " +(typeof r)+ "\n" + z}
	}
	
	
	var c = z;
	var e = {r:r,c:{}};
	var i = 0;
	
	//for (var m in lm)
	//{
	//	z = z+"\n "+m+":"+lm[m];
	//}

	while(lm && i < 12 && true)
	{
		lm = e.r.match(/(EZ_[0-9]+|c00[0-9]|l0cket)` lock/);
		
		if(lm)
		{
			z = z + "`5Lock #``2"+i+"`: " + lm[1] + "";
			args['l'] = lm[1];
			args['p'] = e.c;
			switch(lm[1]) {
			case 'EZ_21':
				e = #fs.snj2.e(args);
				break;
			case 'EZ_35':
				e = #fs.snj2.e(args);
				break;
			case 'EZ_40':
				e = #fs.snj2.e(args);
				break;
			case 'c001':
				e = #fs.snj2.c(args);
				break;
			case 'c002':
				e = #fs.snj2.c(args);
				break;
			case 'c003':
				e = #fs.snj2.c(args);
				break;
			case 'l0cket':
				e = #fs.snj2.c(args);
				break;
			} 
			c = "";
			for(var ek in e.c)
			{
				c = c + "" +  ek + ":" +e.c[ek] + ", "
			}
			
			if(e.r.indexOf('Connection terminated.') > -1 || e.r.indexOf('WARNING: BINMAT') > -1)
				z = z + " `2SUCCESS`";
			z = z + "\n";
			
			//z = z + "`0Response:` " + e.r + "\n`0--`Call{ " + c + "}\n\n";
		} else
		{
			//z = z + "" + e.r;
		}
		
		
		i++;
	}
	if(i > 0)
	{
		z = z + "\nHack finished on `1" +args.t.name+ "`"
	} else
	{
		z = z + "\nCould not hack `1" +args.t.name+ "`:\n" + r
	}

	//var gl = "#s." + args.t.name
	//var o = {name:t.name};
	//var e = #fs.snj2.e2(args);
	
	var v = "\n---`1T1 Hacker:` `X" +t.name+ "`---\n\n\n";
	return v+z;

}