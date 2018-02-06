function (context, args){
    
	// https://github.com/SNJ688/hackmud_t1
	
	var t = args.t;                // target = #s.loc
	var l = args.l
	var pc = args.p
	
	var ln = ["c001", "c002", "c003", "l0cket"]
	var p = ["red", "purple", "blue", "cyan", "green", "lime", "yellow", "orange"];
	var lk = {c001:"color_digit", c002:"c002_complement", c003:"c003_triad_", l0cket:"k3y"}
	var k3 = ["6hh8xw", "cmppiq", "sa23uw", "tvfkyq", "uphlaw", "vc2c7q", "xwz7ja"]
	
	var i = 0;
	var u = 0;
	var x = "";
	var z = x;
	var y = x;
	var r = x;
	var o = pc;
	
	if(l == ln[3])
	{
		for (var k3y in k3)
		{
			o[l] = k3[k3y];
			r = t.call (o)
			x = x + r + "\n"
			if(r.indexOf('not the cor') === -1)
			{
				break;
			}
		}
	} else
	{
		while ( x.indexOf(lk[l]) === -1 && i < 10 )
		{
			o[l] = p[i];
			x = y + t.call (o) + "\n"
			i++;                                                
		}
		i--;
		
		if(l == ln[0])
		{
			o[lk[l]] = p[i].length;
		} else if(l == ln[1])
		{
			o[lk[l]] = p[(i+4) % 8];
		} else if(l == ln[2])
		{
			o[lk[l]+"1"] = p[(i+3) % 8];
			o[lk[l]+"2"] = p[(i+5) % 8];
		}
		r =  t.call (o)
		x = y + r + "\n"
	}	
	

	z = r;
	
    return {r:z, c:o};
   
}