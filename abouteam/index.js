const app = getApp()
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		title: '关于组队',
		currentIndex: 1,
		cardRightIn: false,
		cardLeftIn: false,
		height: app.globalData.customBar, // 此页面 页面内容距最顶部的距离
		list: [{
			title: '你是否需要组队？',
			titlea: '这是一个需要参赛者自己静下来思考确定的问题！',
			titleb: '首先，竞赛主办方是支持参赛者组队参与比赛，也希望大家在备赛过程中能产生思想的碰撞，相互学习进步。你正在参与一场吸引了世界各地优秀伙伴参与的竞赛，你的作品也将被世界顶尖学府的评审们看到，即便你能力出众，你可能也希望在过程中能有队友分享观点、头脑风暴、互相打气。',
			titlec: '队友之间可以互相弥补不足，把团队最优秀的一面通过作品展示出来。',
			titled: '过去我们统计的数据显示，很多原本互不认识的参赛者在一同组队参赛后由战友变成了朋友，这也是一笔宝贵的收获。',
			imgUrl: 'http://cgcp.thirdclassroom.com/Public/Apps/images/studydata/ziliao_one@2x.png',
			imgstaus: true,  // 是否显示图片的状态判断  有就插入图片没有就隐藏
			titlef: '当然，组队参赛也可能碰到挑战与挫折。团队里难免有分歧、误解，你可能还会碰到不负责、付出少的队友，这时你可能感到委屈、不公，但是这正是所有人在成长中重要的必修课。',
			titleg: '无论以后你在国内或者国外读书、工作，团队协作都是无法避免的经历。尽早开始锻炼自己这方面的应对能力，会让你在今后拥有更好的沟通能力和个人发展哦！',
			titleh: '如果以上组队的优点都不能让你心动，你确信自己就是最酷最棒的独行侠，我们也同样尊重你的选择。'
		},
		{
			title: '你应该和谁组队？  ',
			titlea: '如果你确定选择组队参赛，那么你紧接着要思考和谁组队。这很大程度上取决于你对自己能力的认知。',
			titlej: '理想情况下，你的队友能和你互助互补。',
			titleja: '比如，如果你选了一个自己不是非常熟悉的课题，那你可能想找到对这个方向理解更深的队友；如果你好久没有用英文写过文章了，或许你想要找个英文专业的队友一起参赛。  ',
			imgstaus: false,
			titleh: '当然，除了能力上的互补，',
			titlehc: '你也要考虑队友之间的契合度。',
			titlehd: '根据我们之前的统计，在组队参赛前相互之间有一定认识和了解的团队能更高效地、愉快地备赛。队友之间需要有一致目标，并且大家愿意朝着这个共同目标一同努力付出。'
		},
		{
			title: '去哪里寻找队友？',
			titlea: '你可以在已认识的朋友、同学中去发展队友，也可以在',
			titlej: '竞赛系统里的“组队大厅”',
			titleja: '去寻找素未谋面但志同道合的队友。在“组队大厅”，你可以发布自己的组队申请，填写一些自我介绍和对队友的期望，对你的信息感兴趣的参赛者就可以向你发出组队邀请。',
			imgUrl: 'http://cgcp.thirdclassroom.com/Public/Apps/images/studydata/ziliao_two@2x.png',
			imgstaus: true,
			titleh: '同时，你自己也可以在“组队大厅”浏览其他参赛者的组队申请，看是否有你的理想队友。',
			titlehc: '我们建议大家在组队前，多去了解、认识队友，看看各自的目标、课题兴趣、投入程度是否能相互满足。',
			titlehd: '（磨合）'

		},
		{
			title: '团队遇到困难、矛盾时，你该怎么处理呢？  ',
			titlea: '任何团队协作都需要时间来磨合，团队遇到困难、矛盾，这很正常。因此，对于团队之间的冲突，要有尽量客观的认识和理智的对待。要想让队员保持团结，我们建议你们',
			titlej: '提前设立一定的团队规则”',
			titleja: '避免口头承诺，最好以文字的形式呈现。这份团队守则应该让每位队员都理解认同，并愿意遵守。为了增加团队凝聚力，可以定期组织团队沟通。对于队员的写作任务分工，要根据彼此的能力特点来进行匹配。团队目标的确定也非常重要，当每位队员都朝着同一目标努力时，彼此多一些尊重和理解，一起为目标的实现而努力付出。',
			imgstaus: false,
			titleh: '这些方法都可以减少队员之间的误解和矛盾。不过，当隔阂、冲突已经产生时，队员之间也应该尝试解决问题而不是就此放弃比赛。别忘了，你之后的学业和事业历程中会碰到很多更复杂、更重要的团队协作经历，现在一切的坚持与忍耐都会让你变为更优秀的人哦！ ',
		}],
		plist: [{
			pingUrk: 'http://cgcp.thirdclassroom.com//Upload/team/57/16485215063.jpeg',
			pname: '张三',
			pshare: '很棒的分享！',
			time: '2月21日 16:30',
			coment: []
		},
		{
			pingUrk: 'http://cgcp.thirdclassroom.com//Upload/team/57/16485215063.jpeg',
			pname: '张三',
			pshare: '很棒的分享！',
			time: '2月21日 16:30',
			coment: []
		},
		{
			pingUrk: 'http://cgcp.thirdclassroom.com//Upload/team/57/16485215063.jpeg',
			pname: '张三',
			pshare: '很棒的分享！',
			time: '2月21日 16:30',
			coment: [{
				cingUrk: 'http://cgcp.thirdclassroom.com//Upload/team/57/16485215063.jpeg',
				cname: '张三',
				cshare: '很棒的分享！',
				cime: '2月21日 16:30',
			},
			{
				cingUrk: 'http://cgcp.thirdclassroom.com//Upload/team/57/16485215063.jpeg',
				cname: '张三',
				cshare: '很棒的分享！',
				cime: '2月21日 16:30',
			}]
		}]
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
         
	},
	// 加载
	loading:function(e){
        let ind = e.currentTarget.dataset.ind;
		var that = this
		let arr = [{
			cingUrk: 'http://cgcp.thirdclassroom.com//Upload/team/57/16485215063.jpeg',
			cname: '张三',
			cshare: '很棒的分享！',
			cime: '2月21日 16:30',
		},
		{
			cingUrk: 'http://cgcp.thirdclassroom.com//Upload/team/57/16485215063.jpeg',
			cname: '张三',
			cshare: '很棒的分享！',
			cime: '2月21日 16:30',
		}]
	  let ss =  that.data.plist[ind].coment.concat(arr)
	  console.log(ss)
	//   let str = "goods["+ind+"].coment"        
	  
	},
	// 获取输入值
	changeI: function (e) {
		console.log(e.detail.value)
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},
	touchstart: function (e) {
		this.setData({
			startX: e.changedTouches[0].clientX,
			startY: e.changedTouches[0].clientY
		})
	},
	//滑动事件处理
	touchmove: function (e) {
		let idx = e.currentTarget.dataset.index;
		let startX = this.data.startX,//开始X坐标
			startY = this.data.startY,//开始Y坐标
			touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
			touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
			//获取滑动角度
			angle = this.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

		//滑动超过45度角 return
		if (Math.abs(angle) > 45) return;

		if (touchMoveX > startX) { //右滑
			this.setData({
				currentIndex: idx == 0 ? 0 : idx - 1,
				cardRightIn: false,
				cardLeftIn: true
			})
		} else {
			this.setData({
				currentIndex: idx == this.data.list.length - 1 ? idx : idx + 1,
				cardRightIn: true,
				cardLeftIn: false
			})
		}
		wx.pageScrollTo({
			scrollTop: 0
		})

	},
	/**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
	angle: function (start, end) {
		var _X = end.X - start.X,
			_Y = end.Y - start.Y
		//返回角度 /Math.atan()返回数字的反正切值
		return 360 * Math.atan(_Y / _X) / (2 * Math.PI)
	},

})
