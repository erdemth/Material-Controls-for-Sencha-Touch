Ext.define('SenchaUI.view.Main', {
    extend: 'Ext.TabPanel',

    xtype: 'main',

    requires: [
        'Material.components.Button',                   //ok
        'Material.components.Toggle',                   //ok
        'Material.components.Slider',                   //ok
        'Material.components.field.Text',               //ok
        'Material.components.Checkbox',                 //ok
        'Material.components.Tab',                      //ok
        'Material.components.List',                     //ok
        'Material.components.MessageBox',               //ok
        'Material.components.ProgressCircular',         //ok
        'Material.components.field.SelectPanel',        //ok
        'Material.components.field.Select',             //ok
        'Material.components.DatePicker',
        'Material.components.field.DatePicker',
        'Material.components.ColorPickerMain',
        'SenchaUI.form.ChangePasswordPopup'
    ],

    config: {


        items: [
            {
                xtype: 'panel',
                id: '_button',
                style: 'background-color:white; font-size:1px',
                title: 'BUTTON',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',

                        centered: true,
                        items: [
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                //centered: true,

                                items: [
                                    {
                                        xtype: 'buttonM',

                                        text: '+',
                                        style: 'fontSize: 12px',

                                        width: 150,
                                        height: 150,
                                        cls: 'md-raised',
                                        listeners: {


                                            tap: function () {

                                                var me = this;
                                                if (!this.loginView) this.loginView = Ext.widget('ColorPicker');

                                                this.loginView.addListener({
                                                        onChangedColor: function (cmp) {
                                                            //  alert(cmp.oldValue + "," + cmp.newValue);
                                                            console.log(cmp.oldValue + "," + cmp.newValue);
                                                            me.setStyle({background: cmp.newValue});
                                                            me.setText(cmp.newValue);
                                                        }
                                                    }
                                                );
                                                //Ext.Viewport.add(this.loginView);
                                                this.loginView.show();


                                            }
                                        }
                                    },

                                    {
                                        xtype: 'buttonM',

                                        style: 'background: #504Eab;font-size:14px',
                                        width: 150,
                                        height: 150,
                                        iconCls: 'settings',
                                        cls: 'md-flat',
                                        listeners: {


                                            tap: function () {

                                              /*  var me = this;
                                                if (!this.loginView) this.loginView = Ext.widget('ColorPicker');

                                                this.loginView.addListener({
                                                        onChangedColor: function (cmp) {
                                                            //  alert(cmp.oldValue + "," + cmp.newValue);
                                                            console.log(cmp.oldValue + "," + cmp.newValue);
                                                            me.setStyle({background: cmp.newValue});
                                                        }
                                                    }
                                                );
                                                //Ext.Viewport.add(this.loginView);
                                                this.loginView.show();*/


                                            }
                                        }



                                    }
                                    ,

                                    {
                                        xtype: 'buttonM',

                                        text: 'Button',
                                        style: 'color:#1976D2; font-size:14px',
                                        cls:'md-trasparent',

                                        width: 150,
                                        height: 150,
                                        listeners: {


                                            tap: function () {

                                               /* var me = this;
                                                if (!this.loginView) this.loginView = Ext.widget('ColorPicker');

                                                this.loginView.addListener({
                                                        onChangedColor: function (cmp) {
                                                            //  alert(cmp.oldValue + "," + cmp.newValue);
                                                            console.log(cmp.oldValue + "," + cmp.newValue);
                                                            me.setStyle({background: cmp.newValue});
                                                        }
                                                    }
                                                );
                                                //Ext.Viewport.add(this.loginView);
                                                this.loginView.show();*/


                                            }
                                        }


                                    },
                                    {
                                        xtype: 'buttonM',
                                        /*iconAlign:'center',*/
                                        text: 'button',
                                        style: 'color:#eeeeee',
                                        margin: 'auto',
                                        width: 84,
                                        height: 36,
                                        style: 'fontSize: 12px',
                                        // iconCls:'settings',
                                        cls: 'md-flat' ,
                                        listeners: {


                                            tap: function () {

                                             /*   var me = this;
                                                if (!this.loginView) this.loginView = Ext.widget('ColorPicker');

                                                this.loginView.addListener({
                                                        onChangedColor: function (cmp) {
                                                            //  alert(cmp.oldValue + "," + cmp.newValue);
                                                            console.log(cmp.oldValue + "," + cmp.newValue);
                                                            me.setStyle({background: cmp.newValue});
                                                        }
                                                    }
                                                );
                                                //Ext.Viewport.add(this.loginView);
                                                this.loginView.show();*/


                                            }
                                        }

                                    }

                                ]
                            }
                            ,
                            {
                                xtype: 'container',
                                layout: 'vbox',
                                //centered: true,

                                items: [
                                    {
                                        xtype: 'buttonM',

                                        text: '+',
                                        style: 'fontSize: 50px; background:#0F9D58',

                                        width: 150,
                                        height: 150,
                                        cls: 'md-raised' ,
                                        listeners: {


                                            tap: function () {

                                               /* var me = this;
                                                if (!this.loginView) this.loginView = Ext.widget('ColorPicker');

                                                this.loginView.addListener({
                                                        onChangedColor: function (cmp) {
                                                            //  alert(cmp.oldValue + "," + cmp.newValue);
                                                            console.log(cmp.oldValue + "," + cmp.newValue);
                                                            me.setStyle({background: cmp.newValue});
                                                        }
                                                    }
                                                );
                                                //Ext.Viewport.add(this.loginView);
                                                this.loginView.show();*/


                                            }
                                        }


                                    },

                                    {
                                        xtype: 'buttonM',
                                        style: 'background:#FF5252;font-size:14px',

                                        width: 150,
                                        height: 150,
                                        iconCls: 'settings',
                                        cls: 'md-flat' ,
                                        listeners: {


                                            tap: function () {

                                               /* var me = this;
                                                if (!this.loginView) this.loginView = Ext.widget('ColorPicker');

                                                this.loginView.addListener({
                                                        onChangedColor: function (cmp) {
                                                            //  alert(cmp.oldValue + "," + cmp.newValue);
                                                            console.log(cmp.oldValue + "," + cmp.newValue);
                                                            me.setStyle({background: cmp.newValue});
                                                        }
                                                    }
                                                );
                                                //Ext.Viewport.add(this.loginView);
                                                this.loginView.show();*/


                                            }
                                        }

                                    }
                                    ,

                                    {
                                        xtype: 'buttonM',

                                        text: 'Button',
                                        style: 'color:#1976D2;font-size:14px',
                                        cls:'md-trasparent',

                                        width: 150,
                                        height: 150,
                                        listeners: {


                                            tap: function () {

                                               /* var me = this;
                                                if (!this.loginView) this.loginView = Ext.widget('ColorPicker');

                                                this.loginView.addListener({
                                                        onChangedColor: function (cmp) {
                                                            //  alert(cmp.oldValue + "," + cmp.newValue);
                                                            console.log(cmp.oldValue + "," + cmp.newValue);
                                                            me.setStyle({background: cmp.newValue});
                                                        }
                                                    }
                                                );
                                                //Ext.Viewport.add(this.loginView);
                                                this.loginView.show();*/


                                            }
                                        }


                                    },
                                    {
                                        xtype: 'buttonM',

                                        text: 'button',
                                        margin: 'auto',
                                        width: 84,
                                        height: 36,
                                        style: 'fontSize: 12px;background:#FF4081',
                                        // iconCls:'settings',
                                        cls: 'md-flat' ,
                                        listeners: {


                                            tap: function () {

                                              /*  var me = this;
                                                if (!this.loginView) this.loginView = Ext.widget('ColorPicker');

                                                this.loginView.addListener({
                                                        onChangedColor: function (cmp) {
                                                            //  alert(cmp.oldValue + "," + cmp.newValue);
                                                            console.log(cmp.oldValue + "," + cmp.newValue);
                                                            me.setStyle({background: cmp.newValue});
                                                        }
                                                    }
                                                );
                                                //Ext.Viewport.add(this.loginView);
                                                this.loginView.show();*/


                                            }
                                        }

                                    } ,
                                    {
                                        xtype:'button',
                                        width:200,
                                        height:200
                                    }

                                ]
                            }
                        ]
                    }
                ]
            },

            {
                xtype: 'panel',
                id: '_text',
                style: 'background-color:white',
                title: 'TEXT FIELD',
                items: {
                    xtype: 'container',
                    layout: 'vbox',

                    centered: true,

                    items: [
                        {
                            xtype: 'textfield',
                            // centered: true,
                            label: 'Username',
                            labelAlign: 'top',
                            width: '700px'


                        },
                        {
                            xtype: 'textfield',
                            //centered: true,
                            label: 'Password',
                            labelAlign: 'top',
                            width: '700px'


                        } ,
                        {
                            xtype: 'textfield',
                            // centered: true,
                            label: 'Date of birth',
                            labelAlign: 'top',
                            width: '700px'


                        },
                        {
                            xtype: 'textfield',
                            //centered: true,
                            label: 'Nationality',
                            labelAlign: 'top',
                            width: '700px'


                        }  ,
                        {
                            xtype: 'textfield',
                            // centered: true,
                            label: 'Address',
                            labelAlign: 'top',
                            width: '700px'


                        },
                        {
                            xtype: 'textfield',
                            //centered: true,
                            label: 'Telephone',
                            labelAlign: 'top',
                            width: '700px'


                        } ,
                        {
                            xtype: 'textfield',
                            //centered: true,
                            label: 'Website',
                            labelAlign: 'top',
                            width: '700px'


                        }

                    ]
                }
            },

            {
                xtype: 'panel',
                id: '_toggle',
                style: 'background-color:white',
                title: 'TOGGLE',
                items: [
                    {
                        xtype: 'container',
                        layout: 'vbox',

                        centered: true,
                        items: [
                            {
                                xtype: 'md-toggle',    //togglefield
                                margin: '30px'

                            } ,
                            {
                                xtype: 'md-toggle',    //togglefield
                                codeColor: 1,
                                margin: 30

                            },
                            {
                                xtype: 'md-toggle',    //togglefield
                                codeColor: 2,
                                margin: 30

                            },
                            {
                                xtype: 'md-toggle',    //togglefield
                                codeColor: 3,
                                margin: 30

                            }
                        ]
                    }
                ]
            },

            {
                xtype: 'container',
                id: '_slider',
                style: 'background-color:white',
                title: 'SLIDER',
                items: [
                    {
                        xtype: 'container',
                        layout: 'vbox',

                        centered: true,
                        items: [

                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 80,
                                max: 100,
                                step: 1,
                                min: 0,
                                type: 'notick',
                                codeColor: 'red'
                                //centered:true

                            },
                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 80,
                                max: 100,
                                step: 10,
                                min: 0,
                                type: 'tick'
                                //centered:true

                            }
                            ,
                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 80,
                                max: 100,
                                step: 10,
                                min: 0,
                                type: 'tick',
                                tick: 'hidden'

                            },
                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 80,
                                max: 100,
                                min: 0,
                                type: 'tick'
                                //centered:true

                            }
                            ,
                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 80,
                                max: 100,
                                min: 0,
                                step: 5,
                                type: 'tickSingleLeft'
                                //centered:true

                            }
                            ,

                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 80,
                                max: 100,
                                min: 0,

                                type: 'tickSingleLeft',
                                //centered:true
                                tick: 'hidden'

                            }

                            ,
                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 70,
                                max: 100,
                                min: 0,
                                type: 'tickSingleRight'
                                //centered:true
                                , typeTick: "radius"
                            }
                            ,

                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 70,
                                max: 100,
                                min: 0,
                                type: 'tickSingleRight'
                                //centered:true
                                , typeTick: "radius",
                                tick: 'hidden'
                            }
                            ,
                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 80,
                                max: 100,
                                min: 0,
                                step: 10,
                                type: 'tickSingleRight', typeTick: "radius"

                            }
                            ,
                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 80,
                                max: 100,
                                min: 0,
                                step: 1,
                                type: 'notickSingleRight'
                                //centered:true

                            }
                            ,
                            {
                                xtype: 'md-slider',
                                width: 900,
                                height: 80,
                                max: 100,
                                min: 0,
                                value: 50,
                                step: 1,
                                type: 'notickSingleLeft'
                                //centered:true

                            }

                        ]
                    }
                ]


            },

            {
                xtype: 'panel',
                id: '_tab',
                style: 'background-color:white',
                title: 'TAB',

                items: {
                    xtype: 'tabpanel',    //tabpanel
                    centered: true,
                    //fullscreen: true,
                    // tabBarPosition: 'bottom',

                    defaults: {
                        styleHtmlContent: true
                    },

                    items: [
                        {
                            title: 'C++',
                            iconCls: 'home',
                            html: 'Home Screen'
                        },
                        {
                            title: 'Java',
                            iconCls: 'user',
                            html: 'Contact Screen'
                        },
                        {
                            title: 'C',
                            iconCls: 'settings',
                            html: 'Home Screen'
                        },
                        {
                            title: 'Objective-C ',
                            iconCls: 'trash',
                            html: 'Contact Screen'
                        },
                        {
                            title: 'Javascript',
                            iconCls: 'time',
                            html: 'Home Screen'
                        },
                        {
                            title: 'C#',
                            iconCls: 'team',
                            html: 'Contact Screen'
                        },
                        {
                            title: 'VB',
                            iconCls: 'star',
                            html: 'Home Screen'
                        },
                        {
                            title: 'HTML',
                            iconCls: 'search',
                            html: 'Contact Screen'
                        },
                        {
                            title: 'CSS',
                            iconCls: 'reply',
                            html: 'Contact Screen'
                        }
                        //
                        ,
                        {
                            title: 'Python',
                            iconCls: 'refresh',
                            html: 'Contact Screen'
                        },
                        {
                            title: 'Perl',
                            iconCls: 'bookmarks',
                            html: 'Home Screen'
                        }
                    ]
                }
            } ,

            {
                xtype: 'panel',
                id: '_checkbox',
                style: 'background-color:white',
                title: 'CHECKBOX',
                items: [
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        width: 450,
                        height: 100,
                        top: '45%',
                        right: '30%',
                        //style:'background:red',
                        centered: true,
                        items: [
                            {
                                xtype: 'md-checkbox',    //checkboxfield    vs    md-checkbox
                                top: -12,
                                left: 0,
                                id: 'check1',
                                type: 'check'

                            },
                            {
                                xtype: 'md-checkbox',    //checkboxfield    vs    md-checkbox
                                // top: 400,
                                left: 100,
                                id: 'check2',
                                type: 'radio'

                            },
                            {
                                xtype: 'md-checkbox',    //checkboxfield    vs    md-checkbox
                                // top: 400,
                                left: 200,
                                id: 'check3',
                                type: 'nonradius'

                            }
                            /* ,
                             {
                             xtype: 'md-checkbox',    //checkboxfield    vs    md-checkbox
                             // top: 400,
                             left: 300,
                             id: 'check4',
                             type: 'clip'

                             }*/
                        ]
                    }
                ]
            } ,

            {
                xtype: 'panel',
                id: '_list',
                style: 'background-color:white',
                title: 'LIST',
                items: {
                    xtype: 'list',
                    centered: true,
                    cls: 'forList',
                    itemTpl: '{title}',
                    data: [
                        { title: 'Item 1' },
                        { title: 'Item 2' },
                        { title: 'Item 3' },
                        { title: 'Item 4' },
                        { title: 'Item 5' },
                        { title: 'Item 6' },
                        { title: 'Item 7' },
                        { title: 'Item 8' },
                        { title: 'Item 1' },
                        { title: 'Item 2' },
                        { title: 'Item 3' },
                        { title: 'Item 4' },
                        { title: 'Item 5' },
                        { title: 'Item 6' },
                        { title: 'Item 7' },
                        { title: 'Item 8' },
                        { title: 'Item 1' },
                        { title: 'Item 2' },
                        { title: 'Item 3' },
                        { title: 'Item 4' },
                        { title: 'Item 5' },
                        { title: 'Item 6' },
                        { title: 'Item 7' },
                        { title: 'Item 8' },
                        { title: 'Item 1' },
                        { title: 'Item 2' },
                        { title: 'Item 3' },
                        { title: 'Item 4' },
                        { title: 'Item 5' },
                        { title: 'Item 6' },
                        { title: 'Item 7' },
                        { title: 'Item 8' }

                    ],
                    width: 400,
                    height: 400

                }
            },

            {
                xtype: 'panel',
                id: '_messagebox',
                style: 'background-color:white',
                title: 'MESSAGEBOX',
                // layout: 'vbox',

                items: [

                    {
                        xtype: 'container',
                        layout: 'hbox',
                        width: 250,
                        height: 100,

                        //style:'background:red',
                        centered: true,
                        items: [

                            {
                                xtype: 'button',    //togglefield
                                scope: this,
                                cls: 'md-fab',
                                text: 'Confirm',
                                left: 0,
                                //style: 'margin:auto',
                                width: 84,
                                height: 36,
                                /* top: 300,
                                 left: 300,*/
                                style: 'fontSize: 12px;background:#0F9D58',
                                handler: function () {
                                    Ext.Msg.confirm("", "Are you sure you want to do that?", Ext.emptyFn);
                                }
                            },
                            {
                                xtype: 'button',    //togglefield
                                scope: this,
                                cls: 'md-fab',
                                text: 'Prompt',
                                // style: 'margin:auto',
                                right: 0,
                                width: 84,
                                height: 36,
                                style: 'fontSize: 12px;background:#0F9D58',
                                /*top: 300,
                                 right: 300,*/
                                handler: function () {
                                    Ext.Msg.prompt('', 'Please enter your name', function (text) {
                                        // process text value and close...
                                    });
                                }
                            }

                        ]
                    }


                ]
            } ,

            {
                xtype: 'panel',
                id: '_progress-circular',
                style: 'background-color:white',
                title: 'PROCESS-CIRCULAR',
                items: {
                    xtype: 'container',
                    layout: 'hbox',
                    width: 800,
                    height: 400,

                    centered: true,


                    items: [
                        {
                            xtype: 'container',
                            width: '40%',
                            height: '100%',
                            style: 'margin-right:10%',
                            //centered: true,
                            items: {

                                id: '1',
                                type: 'percent',
                                xtype: 'md-progress-circular',
                                width: '100%',
                                height: '100%'

                            }

                        },
                        {
                            xtype: 'container',
                            width: '40%',
                            height: '100%',
                            // centered: true,
                            items: {
                                id: '2',
                                type: 'nonpercent',
                                xtype: 'md-progress-circular',
                                width: '100%',
                                height: '100%'
                                //centered:true
                            }

                        }
                    ]
                }
            },

            {
                xtype: 'panel',
                id: '_select',
                style: 'background-color:white',
                title: 'SELECT',
                items: [
                    {

                        xtype: 'selectfield',
                        defaultTabletPickerConfig: {
                            cls: 'x-mobile-select'
                        },
                        labelAlign: 'top',
                        cls: 'x-field-xlarge',
                        /* label: 'Choose one',*/
                        width: '100px',
                        //centered: true,
                        options: [
                            {
                                text: 'FireFox',
                                value: "FireFox"
                            },
                            {
                                text: 'Chrome',
                                value: "Chrome"
                            } ,
                            {
                                text: 'Safari',
                                value: "Safari"
                            },
                            {
                                text: 'Opera',
                                value: "Opera"
                            },
                            {
                                text: 'IE',
                                value: "IE"
                            },
                            {
                                text: 'Torch',
                                value: "Torch"
                            }

                        ]

                    }  ,
                    {

                        xtype: 'selectfield',
                        defaultTabletPickerConfig: {
                            cls: 'x-mobile-select'
                        },
                        labelAlign: 'top',
                        cls: 'x-field-xlarge',

                        right: '0',
                        width: 1000,
                        //centered: true,
                        options: [
                            {
                                text: 'FireFox',
                                value: "FireFox"
                            },
                            {
                                text: 'Chrome',
                                value: "Chrome"
                            } ,
                            {
                                text: 'Safari',
                                value: "Safari"
                            },
                            {
                                text: 'Opera',
                                value: "Opera"
                            },
                            {
                                text: 'IE',
                                value: "IE"
                            },
                            {
                                text: 'Torch',
                                value: "Torch"
                            }

                        ]

                    },
                    {

                        xtype: 'selectfield',
                        defaultTabletPickerConfig: {
                            cls: 'x-mobile-select'
                        },
                        labelAlign: 'top',
                        cls: 'x-field-xlarge',

                        width: '700px',
                        left: 0,
                        bottom: 0,
                        options: [
                            {
                                text: 'FireFox',
                                value: "FireFox"
                            },
                            {
                                text: 'Chrome',
                                value: "Chrome"
                            } ,
                            {
                                text: 'Safari',
                                value: "Safari"
                            },
                            {
                                text: 'Opera',
                                value: "Opera"
                            },
                            {
                                text: 'IE',
                                value: "IE"
                            },
                            {
                                text: 'Torch',
                                value: "Torch"
                            }

                        ]

                    },
                    {

                        xtype: 'selectfield',
                        defaultTabletPickerConfig: {
                            cls: 'x-mobile-select'
                        },
                        labelAlign: 'top',
                        cls: 'x-field-xlarge',

                        width: '200px',
                        right: 0,
                        bottom: 0,
                        //centered: true,
                        options: [
                            {
                                text: 'FireFox',
                                value: "FireFox"
                            },
                            {
                                text: 'Chrome',
                                value: "Chrome"
                            } ,
                            {
                                text: 'Safari',
                                value: "Safari"
                            },
                            {
                                text: 'Opera',
                                value: "Opera"
                            },
                            {
                                text: 'IE',
                                value: "IE"
                            },
                            {
                                text: 'Torch',
                                value: "Torch"
                            }

                        ]

                    },
                    {

                        xtype: 'selectfield',
                        defaultTabletPickerConfig: {
                            cls: 'x-mobile-select'
                        },
                        labelAlign: 'top',
                        cls: 'x-field-xlarge',
                        //label: 'Choose one',
                        centered: true,
                        options: [
                            {
                                text: 'FireFox',
                                value: "FireFox"
                            },
                            {
                                text: 'Chrome',
                                value: "Chrome"
                            } ,
                            {
                                text: 'Safari',
                                value: "Safari"
                            },
                            {
                                text: 'Opera',
                                value: "Opera"
                            },
                            {
                                text: 'IE',
                                value: "IE"
                            },
                            {
                                text: 'Torch',
                                value: "Torch"
                            }

                        ]

                    }
                ]
            } ,

            {
                xtype: 'panel',
                id: '_datePicker',
                style: 'background-color:white',
                title: 'DATE-PICKER',
                items: {
                    xtype: 'md-datepicker',
                    centered: true,
                    style: 'background:#eeeeee'

                }
            },
            {
                xtype: 'panel',
                id: '',
                scrollable: true,
                width: '100%',
                height: '100%',
                style: 'background-color:white',
                title: 'COLOR-PICKER',
                items: [

                    {
                        xtype: 'md-ColorPickerMain',

                        left: 10,
                        top: 10,
                        //  width:'30%',

                        labelColor: 'black',
                        texLabel: 'Label Name',

                        listeners: {
                            onColorChanged: function (cmp) {
                                console.log(cmp.oldValue + ',' + cmp.newValue);
                            }
                        }
                    } ,
                    {
                        xtype: 'md-ColorPickerMain',
                        left: 600,
                        top: 600,

                        //  width:'30%',
                        labelColor: 'red',
                        texLabel: 'Label name',
                        fortype: 'up',
                        listeners: {
                            onColorChanged: function (cmp) {

                            }
                        }
                    }

                ]
            }


        ]
    }



});