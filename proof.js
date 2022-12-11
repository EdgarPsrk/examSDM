gd=(0.0445*(z+0.8966))/((z-0.9048)*(z-0.8187))
gd
f=gd|1
ki1=1.9937
ki2=0.9995
t=0.1
kp=1
d1=( ( (2*kp+ki1*t)/2 )*( z-( (2*kp-ki1*t) / (2*kp+ki1*t) ) ) ) / (z-1) 
d2=( ( (2*kp+ki2*t)/2 )*( z-( (2*kp-ki2*t) / (2*kp+ki2*t) ) ) ) / (z-1) 
d1
d2
//aparecen los polos sutituidos
kpi1=gd*d1
kpi2=gd*d2
fpi1=kpi1|1
fpi2=kpi2|1
time(f,fpi1,fpi2)


//other
g=(2*s+4)/( (s^2+5*s+6)*(s+4) )
gd=convert(g,8,0.18)