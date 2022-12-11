//punto B el parametro 0.18 es mi caso particulra debes de sacar tu tiempo de la manera requerida
g=(2*s+4)/( (s^2+5*s+6)*(s+4) )
gd=convert(g,8,0.18)
fd=gd|1
x=1/s
xz=convert(x,7,0.18)
y=xz*fd
y

//punto c
y
pfe(y)
izt(y)


//punto d
gd
k=1
gk=k*gd
fk=gk|1
time(fk)


//punto e
gk
rootlocus(gk)


//punto f debes de buscar tus propios parametros para l;las k, esto esta solo para mi caso particular
//(-3.5<kp<41)
//aprox k1=-3.5
//aprox k2=41.4
gd
k1=-6
k2=50
gk1=k1*gd
gk2=k2*gd
fk1=gk1|1
fk2=gk2|1
rootlocus(fk1,fk2)



//punto g busca tus valores dependidndo de tu rango en kp
//1
gd
ki1=38.3623
ki2=29.2959
t=0.18
kp=10
d1=( ( (2*kp+ki1*t)/2 )*( z-( (2*kp-ki1*t) / (2*kp+ki1*t) ) ) ) / (z-1) 
d2=( ( (2*kp+ki2*t)/2 )*( z-( (2*kp-ki2*t) / (2*kp+ki2*t) ) ) ) / (z-1) 
d1
d2
kpi1=gd*d1
kpi2=gd*d2
fpi1=kpi1|1
fpi2=kpi2|1
time(fd,fpi1,fpi2)

//2
gd
ki1=19.1811
ki2=14.6479
t=0.18
kp=5
d1=( ( (2*kp+ki1*t)/2 )*( z-( (2*kp-ki1*t) / (2*kp+ki1*t) ) ) ) / (z-1) 
d2=( ( (2*kp+ki2*t)/2 )*( z-( (2*kp-ki2*t) / (2*kp+ki2*t) ) ) ) / (z-1) 
d1
d2
kpi1=gd*d1
kpi2=gd*d2
fpi1=kpi1|1
fpi2=kpi2|1
time(fd,fpi1,fpi2)

//3
gd
ki1=80.5609
ki2=61.5214
t=0.18
kp=21
d1=( ( (2*kp+ki1*t)/2 )*( z-( (2*kp-ki1*t) / (2*kp+ki1*t) ) ) ) / (z-1) 
d2=( ( (2*kp+ki2*t)/2 )*( z-( (2*kp-ki2*t) / (2*kp+ki2*t) ) ) ) / (z-1) 
d1
d2
kpi1=gd*d1
kpi2=gd*d2
fpi1=kpi1|1
fpi2=kpi2|1
time(fd,fpi1,fpi2)

//4
gd
ki1=111.2508
ki2=84.9581
t=0.18
kp=29
d1=( ( (2*kp+ki1*t)/2 )*( z-( (2*kp-ki1*t) / (2*kp+ki1*t) ) ) ) / (z-1) 
d2=( ( (2*kp+ki2*t)/2 )*( z-( (2*kp-ki2*t) / (2*kp+ki2*t) ) ) ) / (z-1) 
d1
d2
kpi1=gd*d1
kpi2=gd*d2
fpi1=kpi1|1
fpi2=kpi2|1
time(fd,fpi1,fpi2)

//5
gd
ki1=126.5958
ki2=96.6765
t=0.18
kp=33
d1=( ( (2*kp+ki1*t)/2 )*( z-( (2*kp-ki1*t) / (2*kp+ki1*t) ) ) ) / (z-1) 
d2=( ( (2*kp+ki2*t)/2 )*( z-( (2*kp-ki2*t) / (2*kp+ki2*t) ) ) ) / (z-1) 
d1
d2
kpi1=gd*d1
kpi2=gd*d2
fpi1=kpi1|1
fpi2=kpi2|1
time(fd,fpi1,fpi2)


//punto h determina tus valores
gd
kp=1.6925
ki=3.3055
kd=0.1418
dpid=( (2*kp*t+ki*t^2+2*kd)*z^2+(-2*kp*t+ki*t^2-4*kd)*z+2*kd )/(2*t*z*(z-1))
gpid=gd*dpid
fpid=gpid|1
time(fd,fpi2,fpid)




