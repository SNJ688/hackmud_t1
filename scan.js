function (context, args){
    var t = args.t;
	
	
	var gl = #fs.scripts.get_level({name:t.name});
	
	if(gl != 4)
	{
		return {ok:false, msg:"`X  -- ATTEMPTED TO SCAN INSEC SCRIPT -- `" + gl}
	}
	
	// get pages m1:'<projectpage> | <passpage>'
	var r = t.call();
	var r2 = r;
	var m1 = r.match(/(\w+) \| (\w+)/);
	
	// get cmd m2:'with <cmd>:"<scriptpage>"'
    r = t.call({});
	var m2 = r.match(/ith (\w+):"(\w+)"$/);
	
	// PagePRoject PagePaSs PageScriPt
	var z = "";
	if(m1 && m2)
	{
		//z = "C: " +m2[1]+ ", P: " +m1[1]+ ", P: " +m1[2]+ ", S: " +m2[2]+ "";
		
		// get pass m3:'strategy <pass>'
		// {cmd:strategy}
		var o = {};
		o[m2[1]] = m1[2];
		r = t.call(o); // {cmd:"strategy"}
		var m3 = r.match(/tegy (\w+)/);
		
		
		
		if(m3)
		{
			//z =  z + "\nPASS: " +m3[1]+"";
			
			// get pass key
			// {cmd:strategy, p(ass(word)):password}
			var pkl = ["p", "pass", "password"];
			for(var pk in pkl)
			{
				o[m2[1]] = m1[2];
				o[pkl[pk]] = m3[1]
				r = t.call(o); // {cmd:"strategy"}
				if(r.indexOf('Authenticated') > -1)
					break;
			}
			
			// get project '<name_.extension_>'
			// {cmd:projects};
			o[m2[1]] = m1[1];
			r = t.call(o); // {cmd:"projects"}
			var pm = "";
			var um = "";
			for (var fp in r)
			{
				var m4 = r[fp].match(/([a-zA-Z][\w]+\.[a-zA-Z][\w]+)/);//([\w.]+)/);
				if(m4)
				{
					// get scripts
					// {cmd:scriptpage, p(ass(word)):password, project:m4}
					o[m2[1]] = m2[2];
					o['project'] = m4[1];
					r2 = t.call(o);
					//pm = pm + "\n" + m4[1] + " `1Res`: " +(typeof r2)+ "\n" + r2;
					pm = pm + m4[1] + " `1Res`: " +(typeof r2)+ "\n"
					for(var fs in r2)
					{
						//pm = pm + r2[fs] + "\n";
						var m5 = r2[fs].match(/^([\w]+\.[\w]+)$/);//([\w.]+)/);
						if(m5)
						{
							um = um + r2[fs] + "\n"
						}
					}
				}
			}
			
			z = "`2 -- SCANNING T1`: `2" + t.name + "`\n\n`1Projects`:\n" + z + pm + "\n`1Scripts`:\n" + um
			
			// "\n\nC:" +m2[1]+ ", D:" +m2[2]+ ", P:"+m3[1] +
			//z = z + pm + "\n/gs = " + args.t.name + "{{" +m2[1]+ ":\"" +m2[2]+ "\", p:\"" +m3[1]+ "\", project:\"{0}\"}}"
			// regexp for user.scripts ^([\w]*[^\w]?[\w]*\.[\w]*[^\w]?[\w]*)\r\n 
			// simple version: ^([\w]+.[\w]+) ?\r\n
			//var p = ["p", "pass", "password"];
			
		}
		
		return z
	} else
	{
		return {ok:false, msg:"Parse Error"}
	}

	
	
   
}