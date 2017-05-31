function areaOfCircle(radius){
	var pi=3.142;				/* pi is the contant used while calculating the rea of the circle*/
	var area;
	area = pi * radius ** 2;	/* formula to find the area of the circle is pi*radius*radius */
	console.log("Area of circle is : " + area);
}
areaOfCircle(9);	/*calling method*/