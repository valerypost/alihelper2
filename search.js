var request = require('request');
var cheerio = require('cheerio');
// var fs = require('fs')
var q = require('q');
var searchTerm = '';
var url = 'https://www.aliexpress.com/wholesale?SortType=total_tranpro_desc&SearchText=' + searchTerm;
var pagination='page=';
var shiping = 'https://freight.aliexpress.com/ajaxFreightCalculateService.htm?callback=jQuery18303278056892461083_1490202654424&f=d&count=1&currencyCode=USD&sendGoodsCountry=&country=CA&province=&city=&abVersion=1&_=1490202775139&productid=';

 var itemCounter=0;
var re = /([\w\d_-]*)\.?[^\\\/]*$/i;


console.log("start");

exports.generateSearchResult= function (searchPhase,res) {
    var pages=[];
    var requests=[];
    pages.push(url+searchPhase);
    res.write("!!!!!!!!!!!!!"+searchPhase);
    var htmlOut="start !!!!!!!!!!!!!";
    request(url+searchPhase, function(err, resp, body){
        $ = cheerio.load(body);
        var links = $('a'); //jquery get all hyperlinks
        console.log("page links "+links.length);
        //console.log(":::"+JSON.stringify($(links)));
        $(links).each(function(i, link){

            var linkstxt=$(link).text();
            var href=$(link).attr('href');
           // console.log("link" + ':  ' + href);

            if(href.indexOf(pagination)>0) {

                href=href.replace("//","https://");
                console.log("linkstxt" + ':\n  ' + href);


                pages.push(href);
            }
        });
        // return;


        pages.forEach(function (pageUrl) {
            console.log("search:"+pageUrl)
            requests.push(processDetail(pageUrl));
        });
        // console.log("counter:" + itemCounter);

        q.all(requests).then(function(results) {
            results.forEach(function (result) {
                console.log("result :"+JSON.stringify(result) );
                console.log("result.value :"+result.value );
                if (result.state === "fulfilled") {
                    var value = result.value;
//                console.log("value:"+value);
                } else {
                    var reason = result.reason;
                }
            })
            //     .then(function(){
            console.log("wait for epacket");
            q.all(pages).then(function(results) {

                console.log("start");
                results.forEach(function (result) {
                    console.log("pages result :"+JSON.stringify(result) );
                    console.log("pages result.value :"+result.value );

                });

                console.log("end");
                res.end();

            });
            //
            // });

            console.log("all the requests were created");
            console.log("counter:" + itemCounter);
        });


    });

    return htmlOut;


    function processDetail(pageUrl) {
        var d = q.defer();

        request(pageUrl, function (err, resp, body) {
            if (body) {
                $ = cheerio.load(body);
                links = $('a'); //jquery get all hyperlinks
                $(links).each(function (i, link) {
                    var linkstxt = $(link).text();
                    var href = $(link).attr('href');
                    href=href.replace("//","https://");
                    if (href.includes("www.aliexpress.com/item")&&!href.includes('#feedback')&&!href.includes('#thf')) {
                        itemCounter++;
                        //console.log(linkstxt + ':\n  ' + href);
                        //console.log("+");
                        var productId=href.match(re)[1];
                        //console.log("productId:" +productId);
                        pages.push(checkProduct(href,linkstxt, productId,pageUrl));
                    }
                });
                d.resolve("ok");
            } else {
                d.resolve("nobody");
            }

        });
        return d.promise;
        // console.log("linkstxt" + pageUrl);
    }
    function checkProduct(urlPage,name, productId,pageUrl) {
        var p = q.defer();
        if(name) {
            request.get(shiping + productId)
                .on('data', function (data) {
                    if (data.indexOf("ePacket") > 0) {
                        // console.log('epacket: ' + productId);
                        var startParam=urlPage.indexOf('?')
                        urlPage=urlPage.substring(0,startParam);
                        var htmlA = '<a  href="' + urlPage + '">' + name + '</a>';
                        console.log(pageUrl);
                        console.log(htmlA);
                        res.write(htmlA+'</br>');
                        p.resolve("epacket");
                    } else {
                        p.resolve("ship??");
                    }
                });
        }else{
            p.resolve("noname");
        }
        return p.promise;
    }
}



function extractItems(urlPage) {
   request(urlPage, function (err, resp, body) {
        $ = cheerio.load(body);
        links = $("input[attribute=value]"); //jquery get all hyperlinks
        $(links).each(function (i, link) {
            var linkstxt = $(link).text();
            var href = $(link).attr('href');
            if (href.includes("www.aliexpress.com/item")) {
                itemCounter++

                //console.log(linkstxt + ':\n  ' + $(link).attr('href'));
            }
        });
    });
}
