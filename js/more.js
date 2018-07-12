function showmore(topic_id)
{
	let morecontent = document.getElementsByClassName("morecontent-"+topic_id)[0];
	document.getElementsByClassName("showmore-"+topic_id)[0].classList.add('novisibility');
	setTimeout(() => document.getElementsByClassName("showless-"+topic_id)[0].classList.remove('novisibility') ,500);
	morecontent.style.maxHeight = morecontent.scrollHeight+'px';
	if(morecontent.classList.contains('morecontent-1'))
		morecontent.style.marginTop = 'calc(-10px - 5.1vw)';
	else
		morecontent.style.marginTop = 'calc(-20px - 3vw)';
};
function hidemore(topic_id)
{
	let morecontent = document.getElementsByClassName("morecontent-"+topic_id)[0];
	document.getElementsByClassName("showless-"+topic_id)[0].classList.add('novisibility');
	setTimeout(() => document.getElementsByClassName("showmore-"+topic_id)[0].classList.remove('novisibility') ,500);
	morecontent.style.maxHeight = null;
	morecontent.style.margin = null;
};